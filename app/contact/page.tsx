import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow p-8 rounded-lg">

      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Contact Us
      </h1>

      <p className="text-lg mb-4">
        Phone: <strong>719-510-6453</strong>
      </p>

      <p className="text-lg mb-4">
        Email: <strong>service@lagzautotechmobile.com</strong>
      </p>

      <Link
        href="https://wa.me/17195106453"
        className="block mt-6 text-center bg-green-500 text-white py-3 rounded-lg text-xl"
      >
        WhatsApp Us
      </Link>
    </div>
  );
}
