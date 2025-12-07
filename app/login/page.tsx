"use client";

import { useState } from "react";
import { API } from "@/lib/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!data.token) return alert("Invalid login");

    localStorage.setItem("token", data.token);

    if (data.user.role === "ADMIN") router.push("/admin");
    else if (data.user.role === "TECHNICIAN") router.push("/technician");
    else router.push("/customer");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full" onClick={login}>
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
