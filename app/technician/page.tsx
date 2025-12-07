export default function TechnicianDashboard() {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-blue-600">Technician Dashboard</h1>

      <p className="text-gray-700 mt-4">
        View bookings, update repair statuses, scan VINs, and manage today's tasks.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">Today's Jobs</h2>
          <p>No jobs assigned yet.</p>
        </div>

        <div className="p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">Scan VIN</h2>
          <p>VIN scanner integration coming soon.</p>
        </div>
      </div>
    </div>
  );
}
