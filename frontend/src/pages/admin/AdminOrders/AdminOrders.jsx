import { useState } from "react";
import { MOCK_ORDERS } from "../../../data/mockData";
import { toast } from "react-toastify";

function AdminOrders() {
  const [orders, setOrders] = useState(MOCK_ORDERS);

  const handleUpdateStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, orderStatus: newStatus } : o))
    );
    toast.success(`Updated order ${id} status to '${newStatus}'`);
  };

  return (
    <div className="admin-orders d-flex flex-column gap-4">
      {/* Header */}
      <div className="bg-white p-4 rounded-4 border shadow-sm d-flex align-items-center justify-content-between">
        <div>
          <h4 className="fw-bold mb-1 text-dark">Platform Orders Audit</h4>
          <p className="text-muted small mb-0">Monitor all transactions between buyers & farm producers across India</p>
        </div>
        <span className="badge bg-primary fs-6 px-3 py-2 rounded-pill">
          {orders.length} Global Orders
        </span>
      </div>

      {/* Orders Table */}
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Farmer Producer</th>
                <th>Amount</th>
                <th>Payment Status</th>
                <th>Delivery Status</th>
                <th className="text-end">Manage</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((ord) => (
                <tr key={ord.id}>
                  <td className="fw-bold text-success">{ord.id}</td>
                  <td className="text-muted small">{ord.date}</td>
                  <td>
                    <span className="fw-semibold text-dark d-block">{ord.customerName}</span>
                    <span className="text-muted small">{ord.customerPhone}</span>
                  </td>
                  <td className="fw-medium text-dark">{ord.farmerName}</td>
                  <td className="fw-bold text-dark">₹{ord.totalAmount}</td>
                  <td>
                    <span className="badge bg-success">{ord.paymentStatus}</span>
                  </td>
                  <td>
                    <span className={`badge ${ord.orderStatus === 'Delivered' ? 'bg-success' : 'bg-warning text-dark'}`}>
                      {ord.orderStatus}
                    </span>
                  </td>
                  <td className="text-end">
                    <select
                      className="form-select form-select-sm border d-inline-block style-select"
                      style={{ width: "140px" }}
                      value={ord.orderStatus}
                      onChange={(e) => handleUpdateStatus(ord.id, e.target.value)}
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Harvested & Packed">Harvested</option>
                      <option value="In Transit">In Transit</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminOrders;
