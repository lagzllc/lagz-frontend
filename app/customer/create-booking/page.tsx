"use client";

import { useState } from "react";
import { API } from "@/lib/api";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateBooking() {
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  async function submit() {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/booking`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ serviceType, date, notes }),
    });

    const data = await res.json();
    if (data.id) {
      alert("Booking created!");
      window.location.href = "/customer/bookings";
    } else {
      alert("Error creating booking");
    }
  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Create Booking</h1>

      <div className="max-w-md space-y-4">
        <Input
          placeholder="Service Type"
          onChange={(e) => setServiceType(e.target.value)}
        />

        <Input
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          className="border p-2 w-full rounded"
          placeholder="Notes"
          onChange={(e) => setNotes(e.target.value)}
        />

        <Button onClick={submit}>Submit Booking</Button>
      </div>
    </DashboardLayout>
  );
}
