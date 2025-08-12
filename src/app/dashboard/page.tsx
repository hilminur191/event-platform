"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
    } else if (user?.role !== "organizer") {
      router.push("/"); // redirect kalau bukan organizer
    }
  }, [isLoggedIn, user, router]);

  if (!isLoggedIn || user?.role !== "organizer") {
    return <p>Memeriksa akses...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Organizer</h1>
      <button
        onClick={() => router.push("/dashboard/create-event")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        + Buat Event Baru
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Daftar Event Saya</h2>
        {/* Tabel event dummy, nanti sambungkan ke CRUD */}
        <table className="w-full border mt-3">
          <thead>
            <tr>
              <th className="border p-2">Nama Event</th>
              <th className="border p-2">Tanggal</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Konser Musik</td>
              <td className="border p-2">12-08-2025</td>
              <td className="border p-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
