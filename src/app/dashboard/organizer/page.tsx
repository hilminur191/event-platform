"use client";

import { useState } from "react";
import Link from "next/link";

export default function OrganizerDashboardPage() {
  // Dummy data event
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Konser Musik Heboh",
      date: "2025-09-30",
      location: "Jakarta",
    },
    {
      id: 2,
      title: "Festival Kuliner Nusantara",
      date: "2025-10-15",
      location: "Bandung",
    },
  ]);

  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus event ini?");
    if (confirmDelete) {
      setEvents(events.filter((event) => event.id !== id));
      alert("Event berhasil dihapus (Dummy)");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard Organizer</h1>

      <Link
        href="/dashboard/organizer/create"
        className="inline-block mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        + Tambah Event
      </Link>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Nama Event</th>
            <th className="p-2 border">Tanggal</th>
            <th className="p-2 border">Lokasi</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td className="p-2 border">{event.title}</td>
              <td className="p-2 border">{event.date}</td>
              <td className="p-2 border">{event.location}</td>
              <td className="p-2 border space-x-2">
                <Link
                  href={`/dashboard/organizer/edit/${event.id}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
