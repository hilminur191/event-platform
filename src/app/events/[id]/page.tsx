"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type EventData = {
  title: string;
  date: string;
  location: string;
  price: number;
  description: string;
  image: string;
};

export default function EventDetail() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<EventData | null>(null);

  useEffect(() => {
    // Data dummy event
    const dummyEvents: Record<string, EventData> = {
      "1": {
        title: "Konser Musik",
        date: "2025-08-20",
        location: "Jakarta",
        price: 250000,
        description: "Konser musik seru dengan artis papan atas.",
        image: "https://source.unsplash.com/600x400/?concert",
      },
      "2": {
        title: "Workshop Coding",
        date: "2025-08-22",
        location: "Bandung",
        price: 150000,
        description: "Belajar coding bersama mentor berpengalaman.",
        image: "https://source.unsplash.com/600x400/?coding",
      },
      "3": {
        title: "Festival Kuliner",
        date: "2025-08-25",
        location: "Surabaya",
        price: 0,
        description: "Nikmati berbagai kuliner khas daerah.",
        image: "https://source.unsplash.com/600x400/?food",
      },
    };

    const eventId = Array.isArray(params.id) ? params.id[0] : params.id;

    if (eventId && dummyEvents[eventId]) {
      setEvent(dummyEvents[eventId]);
    }
  }, [params.id]);

  if (!event) {
    return <p className="p-6">Event tidak ditemukan.</p>;
  }

  const handleBuyTicket = () => {
    alert(`Membeli tiket untuk: ${event.title}`);
    router.push("/events"); // nanti diarahkan ke halaman pembayaran
  };

  return (
    <div className="p-6">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4">{event.title}</h1>
      <p className="text-gray-500">
        {event.date} - {event.location}
      </p>
      <p className="mt-2">{event.description}</p>
      <p className="mt-4 font-bold">
        {event.price > 0 ? `Rp ${event.price.toLocaleString()}` : "Gratis"}
      </p>
      <button
        onClick={handleBuyTicket}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Beli Tiket
      </button>
    </div>
  );
}
