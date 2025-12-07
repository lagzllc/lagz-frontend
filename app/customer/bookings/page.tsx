"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import { API } from "@/lib/api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function load() {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API}/booking`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setBookings(data);
    }

    load();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.map((b: any) => (
            <TableRow key={b.id}>
              <TableCell>{b.serviceType}</TableCell>
              <TableCell>{new Date(b.date).toLocaleDateString()}</TableCell>
              <TableCell>{b.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardLayout>
  );
}
