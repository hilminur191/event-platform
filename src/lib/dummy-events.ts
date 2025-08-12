import { StringToBoolean } from "class-variance-authority/types";

export type Event = {
  id: string;
  title: string;
  location: string;
  date: string;
  category: String;
  price: number;
  image: string;
  description: string;
};

export const dummyEvents: Event[] = [
  {
    id: "1",
    title: "Konser Musik Bandung",
    location: "Bandung",
    date: "2025-09-01",
    category: "Music",
    price: 100000,
    image: "https://source.unsplash.com/600x400/?concert",
    description: "Konser musik terbesar di Bandung tahun ini.",
  },
  {
    id: "2",
    title: "Seminar startup",
    location: "Jakarta",
    date: "2025-08-20",
    category: "Business",
    price: 50000,
    image: "https://source.unsplash.com/600x400/?startup",
    description: "Seminar tentang cara membangun startup yang sukses.",
  },
  {
    id: "3",
    title: "Konser Musik Jakarta",
    location: "Jakarta",
    date: "2025-07-20",
    category: "Music",
    price: 150000,
    image: "https://source.unsplash.com/600x400/?concert",
    description: "Nikmati konser musik seru di Jakarta.",
  },
  {
    id: "4",
    title: "Seminar Wirausaha",
    location: "Jakarta",
    date: "2025-08-25",
    category: "Business",
    price: 75000,
    image: "https://source.unsplash.com/600x400/?startup",
    description: "Pelajari strategi wirausaha dari para ahli.",
  },
  {
    id: "5",
    title: "Pameran Seni Lukis",
    location: "Yogjakarta",
    date: "2025-08-25",
    category: "Art",
    price: 75000,
    image: "https://source.unsplash.com/600x400/?startup",
    description: "Pameran seni lukis dari seniman lokal dan internasional.",
  },
  {
    id: "6",
    title: "Seminar Teknologi Pertanian",
    location: "Surabaya",
    date: "2025-08-25",
    category: "Tech",
    price: 75000,
    image: "https://source.unsplash.com/600x400/?startup",
    description: "Seminar tentang inovasi teknologi di bidang pertanian.",
  },
];
