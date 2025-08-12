"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReviewPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy: tampilkan di console
    console.log("Event ID:", params.id);
    console.log("Rating:", rating);
    console.log("Komentar:", comment);

    alert("Terima kasih atas review Anda!");
    router.push("/dashboard/customer");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Beri Review untuk Event</h1>

      <form onSubmit={handleSubmit}>
        {/* Rating Bintang */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Rating:</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl ${
                  star <= rating ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Komentar */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Komentar:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border rounded p-2"
            rows={4}
            placeholder="Tuliskan pengalaman Anda..."
            required
          />
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Kirim Review
        </button>
      </form>
    </div>
  );
}
