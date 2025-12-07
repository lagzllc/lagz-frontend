"use client";

import { useState } from "react";
import { API } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER",
  });

  async function register() {
    await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Account created!");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <select
            className="border p-2 w-full rounded"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="CUSTOMER">Customer</option>
            <option value="TECHNICIAN">Technician</option>
            <option value="ADMIN">Admin</option>
          </select>

          <Button className="w-full" onClick={register}>
            Register
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
