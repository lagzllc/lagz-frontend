import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Lagz Auto Tech Mobile",
  description: "Mobile Mechanic & Auto Repair Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<body className="bg-gray-100">
  <Navbar />
  {children}
</body>

    </html>
  );
}
