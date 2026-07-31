import { useParams, Link } from "react-router-dom";
import { MOCK_ORDERS } from "../../../data/mockData";

function OrderTrack() {
  const { id } = useParams();
  const order = MOCK_ORDERS.find((o) => o.id === id) || MOCK_ORDERS[0];

  return (
    <div className="order-track-page d-flex flex-column gap-4">
      {/* Banner */}
      <div className="p-4 rounded-4 bg-white border shadow-sm d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div>
          <span className="badge bg-success mb-2 px-3 py-1 rounded-pill">LIVE TRACKING</span>
          <h3 className="fw-bold text-dark mb-1">Order #{order.id}</h3>
          <p className="text-muted mb-0 small">
            Placed on <strong className="text-dark">{order.date}</strong> • Payment Status: <strong className="text-success">{order.paymentStatus}</strong>
          </p>
        </div>
        <Link to="/buyer/orders" className="btn btn-outline-success rounded-pill px-4">
          &larr; Back to My Orders
        </Link>
      </div>

      {/* Visual Timeline Tracker */}
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <h5 className="fw-bold mb-4 text-dark">Shipment Progress & Farm Dispatch</h5>
        <div className="position-relative py-3">
          <div className="row text-center position-relative z-2">
            {order.trackingSteps.map((step, idx) => (
              <div key={idx} className="col">
                <div
                  className={`mx-auto rounded-circle d-flex align-items-center justify-content-center fw-bold mb-2 shadow-sm ${
                    step.completed ? "bg-success text-white" : "bg-light text-muted border"
                  }`}
                  style={{ width: 44, height: 44, fontSize: "18px" }}
                >
                  {step.completed ? "✓" : idx + 1}
                </div>
                <h6 className={`fw-bold mb-1 ${step.completed ? "text-dark" : "text-muted"}`} style={{ fontSize: "14px" }}>
                  {step.status}
                </h6>
                <span className="text-muted small" style={{ fontSize: "11px" }}>{step.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Details & Delivery Info */}
      <div className="row g-3">
        <div className="col-md-7">
          <div className="bg-white p-4 rounded-4 border shadow-sm h-100">
            <h5 className="fw-bold mb-3 text-dark">Crops in Order</h5>
            <div className="d-flex flex-column gap-3">
              {order.items.map((item, idx) => (
                <div key={idx} className="d-flex align-items-center justify-content-between p-3 rounded-3 bg-light border">
                  <div>
                    <h6 className="fw-bold text-dark mb-0">{item.name}</h6>
                    <span className="text-muted small">Quantity: {item.quantity} {item.unit}</span>
                  </div>
                  <span className="fw-bold text-success">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="bg-white p-4 rounded-4 border shadow-sm h-100">
            <h5 className="fw-bold mb-3 text-dark">Destination & Farmer</h5>
            <div className="mb-3">
              <span className="text-muted small d-block">Farmer Producer</span>
              <strong className="text-dark fs-6">{order.farmerName}</strong>
            </div>
            <div className="mb-3">
              <span className="text-muted small d-block">Delivery Address</span>
              <strong className="text-dark small">{order.deliveryAddress}</strong>
            </div>
            <div>
              <span className="text-muted small d-block">Payment Method</span>
              <strong className="text-dark small">{order.paymentMethod}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderTrack;
