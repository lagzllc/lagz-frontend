"use client";

import { useState } from "react";

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

const handleSubmit = async (e: any) => {
  e.preventDefault();

  const res = await fetch("/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    alert("Booking saved! A technician will contact you.");
  } else {
    alert("Error saving booking.");
  }
};

  return (
    <div className="max-w-lg mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Book a Service
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          className="w-full p-3 border rounded"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-3 border rounded"
          placeholder="Phone Number"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <select
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option>Select Service</option>
          <option>Mobile Diagnostics</option>
          <option>Brake Repair</option>
          <option>Battery Replacement</option>
         <option>suspension reapir</option>
 <option>Emergency Roadside</option>
        </select>

        <input
          type="date"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
