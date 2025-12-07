"use client";

import { useState, useEffect } from "react";

export default function CustomerHome() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser(payload);

      if (payload.role !== "CUSTOMER") {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Invalid token", error);
      window.location.href = "/login";
    }
  }, []);

  if (!user) return null;

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome, {user?.name}</h1>
      <p>You are logged in as a CUSTOMER.</p>
    </div>
  );
}
