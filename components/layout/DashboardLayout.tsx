import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold">Lagz Enterprise</h2>

        <nav className="space-y-2">
          <Link href="/customer" className="block">Customer</Link>
          <Link href="/technician" className="block">Technician</Link>
          <Link href="/admin" className="block">Admin</Link>
        </nav>

        <Button
          className="mt-8 w-full bg-red-600"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </Button>
      </aside>

      <main className="flex-1 p-10 bg-gray-50">{children}</main>
    </div>
  );
}
