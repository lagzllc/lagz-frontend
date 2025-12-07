import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center px-6">

      {/* HERO SECTION */}
      <div className="w-full bg-gray-100 py-28 rounded-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg">
          Mobile Auto Repair
        </h1>
        <p className="text-xl mt-2 text-gray-600">
          Fast • Reliable • We Come To You
        </p>

        <Link
          href="/book"
          className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg"
        >
          Book Now
        </Link>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-3xl mt-16">
        <h2 className="text-3xl font-bold text-blue-700">Why Choose Us?</h2>
        <p className="mt-4 text-gray-700 text-lg">
          We offer mobile diagnostics, repairs, inspections, and emergency 
          assistance — all at your home or workplace.
        </p>
      </div>
    </div>
  );
}
