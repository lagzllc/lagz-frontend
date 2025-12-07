export default function Services() {
  const services = [
    { title: "Diagnostics", desc: "Computer diagnostics & troubleshooting." },
    { title: "Mobile Mechanic", desc: "We come to your home or workplace for repairs." },
    { title: "Brake Repair", desc: "Pads, rotors, brake systems & inspections." },
    { title: "Battery Replacement", desc: "On-site testing & installation." },
    { title: "Engine Repair", desc: "Minor to major engine maintenance." },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-blue-700 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {services.map((service, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
            <p className="mt-2 text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
