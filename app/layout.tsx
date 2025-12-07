import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Lagz AutoTech Mobile",
  description: "Mobile Auto Repair & Diagnostics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">

        {/* NAVBAR */}
        <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50">

          {/* LOGO + NAME */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Lagz AutoTech Logo" width={50} height={50} />
            <h1 className="text-2xl font-bold text-blue-700">Lagz AutoTech</h1>
          </div>

          {/* MENU LINKS */}
          <div className="flex items-center gap-6 text-lg font-medium">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/book">Book</Link>
            <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Login
            </Link>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="pt-24 px-4">{children}</div>
{/* FOOTER */}
<footer className="mt-20 bg-black text-white py-10 px-6">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

    <div>
      <h3 className="font-bold text-xl mb-2">Lagz AutoTech Mobile</h3>
      <p>Fast mobile mechanic & diagnostics.</p>
    </div>

    <div>
      <h3 className="font-bold text-xl mb-2">Hours</h3>
      <p>Mon–Sat: 8am – 6pm</p>
      <p>Sun: Emergency Only</p>
    </div>

    <div>
      <h3 className="font-bold text-xl mb-2">Service Areas</h3>
      <p>Colorado Springs</p>
      <p>Fountain</p>
      <p>Peyton / Falcon</p>
      <p>Manitou Springs</p>
    </div>
  </div>

  <p className="text-center mt-6 text-gray-400">
    © {new Date().getFullYear()} Lagz AutoTech. All Rights Reserved.
  </p>
</footer>   
   </body>
    </html>
  );
}
