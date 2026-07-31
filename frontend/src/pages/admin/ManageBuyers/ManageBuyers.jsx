function ManageBuyers() {
  const buyers = [
    { id: "b1", name: "Ankit Verma", email: "ankit@gmail.com", city: "Mumbai", ordersCount: 8, status: "Active" },
    { id: "b2", name: "Priya Sharma", email: "priya@gmail.com", city: "Bengaluru", ordersCount: 14, status: "Active" },
    { id: "b3", name: "Amitav Roy", email: "amitav@gmail.com", city: "Delhi NCR", ordersCount: 5, status: "Active" }
  ];

  return (
    <div className="bg-white p-4 rounded-4 border shadow-sm">
      <h4 className="fw-bold mb-3 text-dark">Registered Urban Buyers</h4>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Buyer Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Completed Orders</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((b) => (
              <tr key={b.id}>
                <td className="fw-bold text-dark">{b.name}</td>
                <td>{b.email}</td>
                <td>{b.city}</td>
                <td className="fw-bold text-success">{b.ordersCount} Orders</td>
                <td><span className="badge bg-success">{b.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBuyers;
