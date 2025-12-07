"use client";

import { useState } from "react";
import { API } from "@/lib/api";

export default function VinScanPage() {
  const [vin, setVin] = useState("");
  const [vehicle, setVehicle] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function lookupVin() {
    if (!vin) return alert("Enter VIN");

    const token = localStorage.getItem("token");
    if (!token) return alert("You must be logged in");

    setLoading(true);

    try {
      const res = await fetch(`${API}/technician/vin-lookup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ vin }),
      });

      const data = await res.json();
      setVehicle(data);
    } catch (err) {
      console.error(err);
      alert("VIN Lookup Failed");
      setVehicle(null);
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>VIN Scanner</h1>

      <input
        placeholder="Enter VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "10px",
          fontSize: "18px",
        }}
      />

      <button
        onClick={lookupVin}
        style={{ padding: "10px 20px", fontSize: "18px" }}
      >
        {loading ? "Searching..." : "Search VIN"}
      </button>

      {vehicle && (
        <div style={{ marginTop: 20 }}>
          <h3>Vehicle Info</h3>
          <pre>{JSON.stringify(vehicle, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
