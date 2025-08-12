"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditEventPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  // Dummy event awal (nanti dari backend)
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    price: "",
    seats: "",
    description: "",
  });

  useEffect(() => {
    // Simulasi fetch data event dari ID (dummy)
    const dummyEvent = {
      title: "Konser Musik Heboh",
      date: "2025-09-30",
      location: "Jakarta",
      price: "250000",
      seats: "300",
      description: "Konser musik seru dengan berbagai bintang tamu.",
    };
    setFormData(dummyEvent);
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event setelah edit:", formData);
    alert("Event berhasil diperbarui (Dummy)");
    router.push("/dashboard/organizer");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Nama Event"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Lokasi Event"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Harga Tiket (IDR)"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="number"
          name="seats"
          placeholder="Jumlah Kursi"
          value={formData.seats}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Deskripsi Event"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
