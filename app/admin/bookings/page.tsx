async function getBookings() {
  const res = await fetch("http://localhost:3000/api/bookings", {
    cache: "no-store",
  });
  return res.json();
}

export default async function AdminBookings() {
  const bookings = await getBookings();

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        All Bookings
      </h1>

      <div className="space-y-4">
        {bookings.map((b: any) => (
          <div key={b.id} className="p-4 bg-white shadow rounded">
            <h2 className="font-bold">{b.customerName}</h2>
            <p>Phone: {b.customerPhone}</p>
            <p>Service: {b.service}</p>
            <p>Date: {b.date}</p>
            <p>Status: {b.status}</p>
            <p>Technician: {b.technician?.name || "Unassigned"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
