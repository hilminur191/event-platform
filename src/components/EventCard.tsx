import Link from "next/link";
import type { Event } from "@/lib/dummy-events";

export const EventCard = ({ id, title, image, location, date }: Event) => {
  return (
    <Link href={`/events/${id}`}>
      <div className="bg-white shadow rounded-md overflow-hidden hover:shadow-lg transition">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">{location}</p>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
    </Link>
  );
};
