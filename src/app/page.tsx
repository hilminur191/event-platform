"use client";

import { useState, useMemo, useEffect } from "react";
import { dummyEvents } from "@/lib/dummy-events";
import { EventCard } from "@/components/EventCard";
import { SearchBar } from "@/components/SearchBar";
import { useDebounce } from "@/hooks/useDebounce";
import { Filter } from "@/components/Filter";
import { Pagination } from "@/components/Pagination";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const debouncedSearch = useDebounce(searchTerm, 500);

  const categories = useMemo(() => {
    return [...new Set(dummyEvents.map((e) => e.category))];
  }, []);

  const locations = useMemo(() => {
    return [...new Set(dummyEvents.map((e) => e.location))];
  }, []);

  const filteredEvents = dummyEvents.filter((event) => {
    const matchSearch = event.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    const matchCategory =
      selectedCategory === "" || event.category === selectedCategory;
    const matchLocation =
      selectedLocation === "" || event.location === selectedLocation;
    return matchSearch && matchCategory && matchLocation;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, selectedCategory, selectedLocation]);

  return (
    <main className="container mx-auto p-4">
      <div>
        <Navbar />
      </div>
      <h1 className="text-3xl font-bold mb-6">Daftar Event</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        categories={categories}
        locations={locations}
      />

      {paginatedEvents.length === 0 ? (
        <p className="text-gray-500">Event tidak ditemukan.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </main>
  );
}
