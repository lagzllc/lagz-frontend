"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = (e: any) => {
    e.preventDefault();
    alert("Registration successful!");
    console.log(form);
  };

  return (
    <div className="max-w-md mx-auto mt-32 bg-white p-8 rounded shadow-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Register
      </h1>

      <form onSubmit={submit} className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-3 border rounded"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full p-3 border rounded"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-green-600 text-white py-3 rounded">
          Create Account
        </button>
      </form>
    </div>
  );
}
