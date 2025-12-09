"use client";

import { useState } from "react";

export default function CreateBooking() {
  const [form, setForm] = useState({
    customerName: "",
    customerPhone: "",
    service: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  async function submitForm(e: any) {
    e.preventDefault();
    const res = await fetch("/api/book", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) setMessage("Booking created successfully!");
    else setMessage("Error submitting booking.");
  }

  return (
    <div className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Book a Service</h1>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={submitForm} className="flex flex-col gap-4">
        <input
          className="border p-3 rounded"
          placeholder="Your Name"
          onChange={(e) => setForm({ ...form, customerName: e.target.value })}
        />

        <input
          className="border p-3 rounded"
          placeholder="Phone Number"
          onChange={(e) => setForm({ ...form, customerPhone: e.target.value })}
        />

        <input
          className="border p-3 rounded"
          placeholder="Service Needed"
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        />

        <input
          type="date"
          className="border p-3 rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <button className="bg-blue-600 text-white p-3 rounded">
          Submit Booking
        </button>
      </form>
    </div>
  );
}
