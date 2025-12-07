"use client";

import { useState } from "react";
import { API } from "@/lib/api";

export default function VinScanPage() {
  const [vin, setVin] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function lookupVin() {
    if (!vin) return alert("Please enter VIN");

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
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("VIN lookup failed");
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>VIN Scanner</h1>

      <input
        placeholder="Enter or Scan VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "18px",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={lookupVin}
        style={{ padding: "10px 20px", fontSize: "18px" }}
        disabled={loading}
      >
        {loading ? "Searching..." : "Search VIN"}
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
