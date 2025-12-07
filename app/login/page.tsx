"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: any) => {
    e.preventDefault();

    if (email === "test@test.com" && password === "1234") {
      alert("Login successful!");
      router.push("/customer");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-32 bg-white p-8 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h1>

      <form onSubmit={submit} className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 border rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
