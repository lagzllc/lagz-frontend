"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));

        if (payload.role === "ADMIN") window.location.href = "/admin";
        if (payload.role === "CUSTOMER") window.location.href = "/customer";
        if (payload.role === "TECHNICIAN") window.location.href = "/technician";
      } catch (err) {}
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center text-white max-w-2xl px-6">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Lagz AutoTech
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Mobile diagnostics, vehicle inspections, and fast technician dispatch — all in one platform.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/login"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg shadow-md"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md text-lg shadow-md"
            >
              Register
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Why Choose Lagz AutoTech?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Instant Technician Dispatch</h3>
            <p className="text-gray-600">
              Quickly connect with certified mobile technicians available near you.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Vehicle Diagnostics</h3>
            <p className="text-gray-600">
              Scan your VIN, track work progress, and get detailed reports instantly.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Customer & Technician Portals</h3>
            <p className="text-gray-600">
              Intuitive dashboards for both technicians and customers.
            </p>
          </div>

        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-100">
        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="/customer"
            className="px-6 py-3 bg-white rounded shadow hover:bg-gray-200 transition text-gray-900"
          >
            Customer Portal
          </a>

          <a
            href="/technician"
            className="px-6 py-3 bg-white rounded shadow hover:bg-gray-200 transition text-gray-900"
          >
            Technician Portal
          </a>

          <a
            href="/admin"
            className="px-6 py-3 bg-white rounded shadow hover:bg-gray-200 transition text-gray-900"
          >
            Admin Dashboard
          </a>

        </div>
      </section>

    </div>
  );
}
