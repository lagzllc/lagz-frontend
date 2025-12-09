export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="text-lg mb-2">
        Phone: <a href="tel:7195106453" className="text-blue-600 font-medium">719-510-6453</a>
      </p>

      <p className="text-lg mb-2">
        Email: <a href="mailto:service@lagzautotechmobile.com" className="text-blue-600 font-medium">
          service@lagzautotechmobile.com
        </a>
      </p>

      <p className="text-lg mb-2">
        WhatsApp: 
        <a 
          href="https://wa.me/17195106453"
          className="text-green-600 font-medium ml-2"
          target="_blank"
        >
          Message us on WhatsApp
        </a>
      </p>
    </div>
  );
}
