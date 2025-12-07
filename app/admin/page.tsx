export default function AdminDashboard() {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-blue-600">Admin Dashboard</h1>

      <p className="text-gray-700 mt-4">
        Manage users, technicians, bookings, and system configuration.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">User Accounts</h2>
          <p>View and manage all user accounts.</p>
        </div>

        <div className="p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">Bookings</h2>
          <p>Review all customer bookings.</p>
        </div>
      </div>
    </div>
  );
}
