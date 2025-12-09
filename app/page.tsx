"use client";

import Link from "next/link";
import { Phone, Wrench, Car, Clock, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-[#0F172A] text-white py-20 px-6 text-center fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mobile Auto Repair & Diagnostics
        </h1>
        <p className="text-lg md:text-xl opacity-80 mb-6">
          Fast, professional mobile mechanic service — we come to you.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="tel:7195106453"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold"
          >
            <Phone size={20} /> Call Now: 719-510-6453
          </a>

          <a
            href="https://wa.me/17195106453"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold"
          >
            <MessageCircle size={20} /> WhatsApp
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why Choose Lagz AutoTech Mobile?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-10">
          We offer mobile diagnostics, repairs, inspections, and emergency
          assistance — all at your home or workplace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-lg">
            <Wrench size={40} className="mx-auto text-blue-600" />
            <h3 className="text-xl font-semibold mt-4">Full Mobile Repair</h3>
            <p className="text-gray-600 mt-2">
              Complete auto repair services delivered to you.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <Car size={40} className="mx-auto text-blue-600" />
            <h3 className="text-xl font-semibold mt-4">Diagnostics</h3>
            <p className="text-gray-600 mt-2">
              Check engine lights & full system scans.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <Clock size={40} className="mx-auto text-blue-600" />
            <h3 className="text-xl font-semibold mt-4">Fast Response</h3>
            <p className="text-gray-600 mt-2">
              Same-day service available in most areas.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
        <p className="text-gray-700">Colorado Springs • Fountain • Security • Widefield • Pueblo</p>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <Link
          href="/book"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700"
        >
          Book a Service
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center">
        <p className="font-bold text-lg">Lagz AutoTech Mobile</p>
        <p className="opacity-70 mt-1">Mobile Mechanic • Diagnostics • Repairs</p>
        <p className="opacity-50 mt-2 text-sm">
          © {new Date().getFullYear()} Lagz AutoTech Mobile. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
