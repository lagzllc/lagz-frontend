"use client";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", description: "" });

const submit = async () => {
  const response = await fetch("https://lagz-backend-1.onrender.com/booking/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (response.ok) {
    alert("Booking submitted! A technician will contact you shortly.");
  } else {
    alert("Error submitting booking.");
  }
};

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow">

      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Book a Service</h1>

      <input
        className="w-full p-3 border rounded mb-4"
        placeholder="Your Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="w-full p-3 border rounded mb-4"
        placeholder="Phone Number"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        className="w-full p-3 border rounded mb-4"
        placeholder="Service Needed"
        onChange={(e) => setForm({ ...form, service: e.target.value })}
      />

      <textarea
        className="w-full p-3 border rounded mb-4"
        placeholder="Describe the issue"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        onClick={submit}
      >
        Submit Request
      </button>
    </div>
  );
}
