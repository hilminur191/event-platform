"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-beetwen items-center space-x-4 rounded-2xl">
      <div className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        {isLoggedIn && <Link href="/dashboard">Dashboard</Link>}
      </div>

      <div className="flex space-x-4">
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
