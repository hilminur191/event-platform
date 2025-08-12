"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditEvent() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
    } else {
      const dummyEvent: Record<string, { title: string; date: string }> = {
        "1": { title: "Konser Musik", date: "2025-08-20" },
        "2": { title: "Workshop Coding", date: "2025-08-22" },
        "3": { title: "Festival Kuliner", date: "2025-08-25" },
      };

      const eventData = dummyEvent[id];
      if (eventData) {
        setTitle(eventData.title);
        setDate(eventData.date);
      }
    }
  }, [isLoggedIn, router, id]);

  if (!isLoggedIn) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Event ${id} diupdate: ${title} - ${date}`);
    router.push("/dashboard");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Judul Event</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block">Tanggal</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}
