"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useEffect } from "react";

export default function AdminHome() {
useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
}, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="space-x-4">
        <a href="/admin/users" className="underline text-blue-600">
          View Users
        </a>

        <a href="/admin/bookings" className="underline text-blue-600">
          View Bookings
        </a>
      </div>
    </DashboardLayout>
  );
}

