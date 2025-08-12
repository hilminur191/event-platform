"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EventList() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const events = [
    {
      id: 1,
      title: "Konser Musik",
      date: "20 Agustus 2025",
      category: "Musik",
      location: "Jakarta",
    },
    {
      id: 2,
      title: "Workshop Coding",
      date: "22 Agustus 2025",
      category: "Teknologi",
      location: "Bandung",
    },
    {
      id: 3,
      title: "Festival Kuliner",
      date: "25 Agustus 2025",
      category: "Kuliner",
      location: "Surabaya",
    },
  ];

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  // Filter data
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    const matchesCategory = category ? event.category === category : true;
    const matchesLocation = location ? event.location === location : true;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Event</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Cari event..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Filter */}
      <div className="flex gap-4 mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Semua Kategori</option>
          <option value="Musik">Musik</option>
          <option value="Teknologi">Teknologi</option>
          <option value="Kuliner">Kuliner</option>
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Semua Lokasi</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Bandung">Bandung</option>
          <option value="Surabaya">Surabaya</option>
        </select>
      </div>

      {/* Event List */}
      {filteredEvents.length > 0 ? (
        <ul className="space-y-4">
          {filteredEvents.map((event) => (
            <li key={event.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>{event.date}</p>
              <p className="text-sm text-gray-500">
                {event.category} - {event.location}
              </p>
              <Link
                href={`/events/${event.id}`}
                className="text-blue-500 hover:underline"
              >
                Lihat Detail
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">
          Tidak ada event yang cocok dengan pencarian.
        </p>
      )}
    </div>
  );
}
