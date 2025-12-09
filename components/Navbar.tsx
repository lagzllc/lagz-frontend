"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          LAGZ AutoTech Mobile
        </Link>

        <div className="flex space-x-6">
          <Link href="/services">Services</Link>
          <Link href="/booking">Book Now</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
