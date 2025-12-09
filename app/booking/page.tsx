"use client";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit() {
    alert("Booking submitted — backend connection coming next!");
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Book a Service</h1>

      <div className="flex flex-col space-y-3">
        <input name="name" placeholder="Your Name" className="border p-2" onChange={handleChange}/>
        <input name="phone" placeholder="Phone Number" className="border p-2" onChange={handleChange}/>
        <input name="service" placeholder="Service Needed" className="border p-2" onChange={handleChange}/>
        <input name="date" type="date" className="border p-2" onChange={handleChange}/>
      </div>

      <button onClick={submit} className="bg-black text-white px-6 py-2 mt-4">
        Submit
      </button>
    </div>
  );
}
