"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateEventPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    price: "",
    seats: "",
    description: "",
  });

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
    console.log("Event baru:", formData);
    alert("Event berhasil dibuat (Dummy)");
    router.push("/dashboard/organizer");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tambah Event Baru</h1>

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
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Simpan Event
        </button>
      </form>
    </div>
  );
}
