import { Link } from "react-router-dom";
import { MOCK_ORDERS } from "../../../data/mockData";

function BuyerOrders() {
  return (
    <div className="buyer-orders-page d-flex flex-column gap-4">
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <h4 className="fw-bold mb-1 text-dark">My Crop Orders & History</h4>
        <p className="text-muted small mb-4">Track dispatches, view farmer receipts, and reorder fresh crops</p>

        <div className="d-flex flex-column gap-3">
          {MOCK_ORDERS.map((order) => (
            <div key={order.id} className="border rounded-4 p-4 bg-light">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between pb-3 border-bottom mb-3 gap-2">
                <div>
                  <span className="fw-bold text-success me-2">{order.id}</span>
                  <span className="text-muted small">Placed on {order.date}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className={`badge rounded-pill ${order.orderStatus === "Delivered" ? "bg-success" : "bg-warning text-dark"}`}>
                    {order.orderStatus}
                  </span>
                  <Link to={`/buyer/orders/${order.id}/track`} className="btn btn-sm btn-krishi-primary py-1 px-3">
                    Track Live
                  </Link>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-md-7">
                  <span className="text-muted small d-block mb-1">Farmer: <strong>{order.farmerName}</strong></span>
                  <ul className="mb-0 ps-3 small text-secondary">
                    {order.items.map((it, idx) => (
                      <li key={idx}>
                        {it.name} ({it.quantity} {it.unit}) - ₹{it.price * it.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-5 text-md-end mt-3 mt-md-0">
                  <span className="text-muted small d-block">Total Payment</span>
                  <h4 className="fw-bold text-dark mb-0">₹{order.totalAmount}</h4>
                  <span className="text-muted small">{order.paymentMethod}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyerOrders;
