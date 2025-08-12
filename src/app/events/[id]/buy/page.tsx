"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type EventData = {
  title: string;
  price: number;
};

export default function BuyTicketPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<EventData | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // data dummy sama seperti EventDetail
    const dummyEvents: Record<string, EventData> = {
      "1": {
        title: "Konser Musik",
        price: 250000,
      },
      "2": {
        title: "Workshop Coding",
        price: 150000,
      },
      "3": {
        title: "Festival Kuliner",
        price: 0,
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

  const totalPrice = event.price * quantity;

  const handleCheckout = () => {
    alert(
      `Checkout: ${
        event.title
      } - ${quantity} tiket - Total: Rp ${totalPrice.toLocaleString()}`
    );
    router.push("/events"); // nanti diarahkan ke midtrans payment page
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Beli Tiket: {event.title}</h1>
      <p className="mt-2">
        Harga per tiket:{" "}
        {event.price > 0 ? `Rp ${event.price.toLocaleString()}` : "Gratis"}
      </p>

      {event.price > 0 && (
        <>
          <label className="mt-4 block">Jumlah Tiket:</label>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border px-2 py-1 rounded w-20"
          />
          <p className="mt-2 font-bold">
            Total: Rp {totalPrice.toLocaleString()}
          </p>
        </>
      )}

      <button
        onClick={handleCheckout}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Checkout
      </button>
      <button
        onClick={() => router.back()}
        className="ml-2 mt-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
      >
        Kembali
      </button>
    </div>
  );
}
