export default function Services() {
  const services = [
    "Mobile Auto Repair",
    "Check Engine Diagnostics",
    "Battery Replacement",
    "Brake Service",
    "Mobile Mechanic – Any Location",
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service} className="p-4 bg-white shadow rounded">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}
