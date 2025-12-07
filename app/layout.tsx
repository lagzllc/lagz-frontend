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
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
            
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Lagz AutoTech Logo" width={50} height={50} />
              <span className="text-xl font-bold text-blue-600">Lagz AutoTech</span>
            </div>

            {/* LINKS */}
            <div className="flex items-center gap-6 text-gray-700 font-medium">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/book">Book</Link>

              {/* LOGIN BUTTON */}
              <Link
                href="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Login
              </Link>

              {/* WHATSAPP ICON */}
              <a
                href="https://wa.me/17195106453"
                target="_blank"
                className="bg-green-500 text-white px-3 py-2 rounded-lg"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="pt-24"> {children} </div>
      </body>
    </html>
  );
}
