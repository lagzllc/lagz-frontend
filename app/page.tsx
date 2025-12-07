import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="w-full h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Mobile Auto Repair
        </h1>
        <p className="mt-4 text-xl md:text-2xl drop-shadow-lg">
          Fast • Reliable • We Come To You
        </p>

        <Link
          href="/book"
          className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 shadow-lg rounded-xl text-xl"
        >
          Book Now
        </Link>
      </section>

      {/* INTRO SECTION */}
      <div className="mt-16 text-center px-6">
        <h2 className="text-4xl font-bold text-blue-700">Why Choose Us?</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          We offer mobile diagnostics, repairs, inspections, and emergency assistance —
          all at your home or workplace.
        </p>
      </div>

    </div>
  );
}
