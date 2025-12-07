export default function Services() {
  const services = [
    {
      title: "Mobile Diagnostics",
      desc: "Complete vehicle diagnostics at your home or workplace.",
    },
    {
      title: "Check Engine Light",
      desc: "Fast and accurate troubleshooting of engine issues.",
    },
    {
      title: "Brake Repair",
      desc: "Mobile brake pad replacement and inspection.",
    },
    {
      title: "Battery Replacement",
      desc: "We replace and test car batteries on-site.",
    },
    {
      title: "Emergency Roadside",
      desc: "Need urgent help? We come to your location immediately.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-20 px-6">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">
        Our Services
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-white shadow-md rounded-lg border">
            <h2 className="text-xl font-semibold text-gray-900">{s.title}</h2>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
