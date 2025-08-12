"use client";

import { useState } from "react";

export default function CustomerDashboardPage() {
  // Dummy data pembelian tiket
  const [purchases] = useState([
    {
      id: 1,
      eventName: "Konser Musik Heboh",
      date: "2025-09-30",
      location: "Jakarta",
      ticketType: "VIP",
      price: 500000,
      status: "Berhasil",
    },
    {
      id: 2,
      eventName: "Festival Kuliner Nusantara",
      date: "2025-10-15",
      location: "Bandung",
      ticketType: "Reguler",
      price: 150000,
      status: "Berhasil",
    },
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Riwayat Pembelian Tiket</h1>

      {purchases.length === 0 ? (
        <p className="text-gray-500">Belum ada pembelian tiket.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Event</th>
              <th className="p-2 border">Tanggal</th>
              <th className="p-2 border">Lokasi</th>
              <th className="p-2 border">Tipe Tiket</th>
              <th className="p-2 border">Harga</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id}>
                <td className="p-2 border">{purchase.eventName}</td>
                <td className="p-2 border">{purchase.date}</td>
                <td className="p-2 border">{purchase.location}</td>
                <td className="p-2 border">{purchase.ticketType}</td>
                <td className="p-2 border">
                  Rp {purchase.price.toLocaleString("id-ID")}
                </td>
                <td className="p-2 border text-green-600 font-semibold">
                  {purchase.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
