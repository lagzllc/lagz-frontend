"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import { API } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [technicians, setTechnicians] = useState([]);

  async function loadBookings() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API}/admin/bookings`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setBookings(await res.json());
  }

  async function loadTechnicians() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API}/admin/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const all = await res.json();
    setTechnicians(all.filter((u: any) => u.role === "TECHNICIAN"));
  }

  async function assign(bookingId: number, technicianId: number) {
    const token = localStorage.getItem("token");

    await fetch(`${API}/admin/assign`, {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ bookingId, technicianId }),
    });

    loadBookings();
  }

  useEffect(() => {
    loadBookings();
    loadTechnicians();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">All Bookings</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Technician</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Assign</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.map((b: any) => (
            <TableRow key={b.id}>
              <TableCell>{b.serviceType}</TableCell>
              <TableCell>{new Date(b.date).toLocaleDateString()}</TableCell>
              <TableCell>{b.customer?.email}</TableCell>
              <TableCell>{b.technician?.email || "Unassigned"}</TableCell>
              <TableCell>{b.status}</TableCell>

              <TableCell>
                <select
                  className="border p-2 rounded mr-2"
                  onChange={(e) => assign(b.id, Number(e.target.value))}
                >
                  <option>Select Technician</option>
                  {technicians.map((t: any) => (
                    <option key={t.id} value={t.id}>
                      {t.email}
                    </option>
                  ))}
                </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardLayout>
  );
}
