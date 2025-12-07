"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    // If logged in, redirect to correct dashboard:
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));

        if (payload.role === "ADMIN") {
          window.location.href = "/admin";
        } else if (payload.role === "CUSTOMER") {
          window.location.href = "/customer";
        } else if (payload.role === "TECHNICIAN") {
          window.location.href = "/technician";
        }
      } catch (err) {
        console.error("Invalid token");
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to Lagz AutoTech</h1>
      <p className="text-gray-600 mb-8 text-lg text-center">
        Please choose your portal to continue.
      </p>

      <div className="flex gap-6">
        <a
          href="/login"
          className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Login
        </a>

        <a
          href="/register"
          className="px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700"
        >
          Register
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <a href="/admin" className="p-4 bg-white shadow-md rounded-md hover:bg-gray-200">
          Admin Dashboard
        </a>
        <a href="/customer" className="p-4 bg-white shadow-md rounded-md hover:bg-gray-200">
          Customer Portal
        </a>
        <a href="/technician" className="p-4 bg-white shadow-md rounded-md hover:bg-gray-200">
          Technician Portal
        </a>
      </div>
    </div>
  );
}
