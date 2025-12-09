async function getJobs() {
  const res = await fetch("http://localhost:3000/api/bookings", {
    cache: "no-store",
  });
  const all = await res.json();

  // Example: technician hardcoded (later we add login)
  const technicianId = "TECHNICIAN-ID-HERE";
  return all.filter((job: any) => job.technicianId === technicianId);
}

export default async function TechnicianDashboard() {
  const jobs = await getJobs();

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Your Jobs</h1>

      {jobs.length === 0 && <p>No assigned jobs yet.</p>}

      {jobs.map((job: any) => (
        <div key={job.id} className="p-4 bg-white shadow rounded mb-4">
          <h2 className="font-bold text-xl">{job.service}</h2>
          <p>Customer: {job.customerName}</p>
          <p>Phone: {job.customerPhone}</p>
          <p>Date: {job.date}</p>
        </div>
      ))}
    </div>
  );
}
