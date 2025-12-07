"use client";

import { useEffect, useState } from "react";

export default function TechnicianHome() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));

      if (payload.role !== "TECHNICIAN") {
        alert("You are not authorized to access the technician dashboard.");
        window.location.href = "/login";
        return;
      }

      setUser(payload);
    } catch (error) {
      console.error("Invalid token:", error);
      window.location.href = "/login";
    }
  }, []);

  if (!user) return null;

  return (
    <div style={{ padding: 20 }}>
      <h1>Technician Dashboard</h1>
      <p>Welcome, {user.name}</p>

      <a href="/technician/vin-scan" style={{ color: "blue" }}>
        Scan VIN
      </a>
    </div>
  );
}
