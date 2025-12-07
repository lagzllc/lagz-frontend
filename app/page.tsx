"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.role === "ADMIN") window.location.href = "/admin";
      if (payload.role === "CUSTOMER") window.location.href = "/customer";
      if (payload.role === "TECHNICIAN") window.location.href = "/technician";
    } catch {}
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">

      {/* ---------------- TOP NAV ---------------- */}
      <header className="w-full bg-white shadow-sm py-4 px-10 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-semibold tracking-tight">Lagz AutoTech</h1>

        <nav className="hidden md:flex gap-8 text-lg">
          <a href="/customer" className="hover:text-blue-600">Customers</a>
          <a href="/technician" className="hover:text-blue-600">Technicians</a>
          <a href="/admin" className="hover:text-blue-600">Admin</a>
        </nav>

        <div className="flex gap-4">
          <a
            href="/login"
            className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-5 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Register
          </a>
        </div>
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative px-10 max-w-3xl text-white">
          <h2 className="text-5xl font-bold mb-4">Professional Mobile Auto Diagnostics</h2>
          <p className="text-xl opacity-90 mb-6">
            Empowering customers and technicians with modern technology.
          </p>

          <a
            href="/register"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg shadow-lg"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose Lagz AutoTech?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Fast Technician Dispatch</h4>
            <p className="text-gray-600 leading-relaxed">
              Connect with trained professionals instantly through an optimized mobile network.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Accurate Vehicle Diagnostics</h4>
            <p className="text-gray-600 leading-relaxed">
              VIN scanning and real-time diagnostics ensure correct and efficient service.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Modern Online Portal</h4>
            <p className="text-gray-600 leading-relaxed">
              Easy-to-use dashboards for Customers, Technicians, and Admins.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------- QUICK LINKS ---------------- */}
      <section className="bg-gray-100 py-14">
        <h3 className="text-center text-2xl font-semibold mb-8">Quick Access</h3>

        <div className="flex justify-center flex-wrap gap-6 text-lg">
          <a href="/customer" className="px-6 py-3 rounded-md bg-white shadow hover:bg-gray-200">
            Customer Portal
          </a>
          <a href="/technician" className="px-6 py-3 rounded-md bg-white shadow hover:bg-gray-200">
            Technician Portal
          </a>
          <a href="/admin" className="px-6 py-3 rounded-md bg-white shadow hover:bg-gray-200">
            Admin Dashboard
          </a>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-white py-8 mt-10 border-t text-center text-gray-600">
        <p>© {new Date().getFullYear()} Lagz AutoTech. All rights reserved.</p>
      </footer>
    </div>
  );
}
