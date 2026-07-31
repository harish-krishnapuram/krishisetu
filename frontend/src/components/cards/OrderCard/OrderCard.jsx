import { Link } from "react-router-dom";

function OrderCard({ order }) {
  if (!order) return null;

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return <span className="badge bg-success-subtle text-success border border-success rounded-pill px-3 py-1"><i className="bi bi-check-circle-fill me-1"></i>Delivered</span>;
      case "shipped":
      case "out for delivery":
        return <span className="badge bg-primary-subtle text-primary border border-primary rounded-pill px-3 py-1"><i className="bi bi-truck me-1"></i>Shipped</span>;
      case "processing":
      case "packed":
        return <span className="badge bg-warning-subtle text-warning-emphasis border border-warning rounded-pill px-3 py-1"><i className="bi bi-box-seam me-1"></i>Processing</span>;
      case "cancelled":
        return <span className="badge bg-danger-subtle text-danger border border-danger rounded-pill px-3 py-1"><i className="bi bi-x-circle me-1"></i>Cancelled</span>;
      default:
        return <span className="badge bg-secondary-subtle text-secondary border border-secondary rounded-pill px-3 py-1"><i className="bi bi-clock me-1"></i>{status}</span>;
    }
  };

  return (
    <div className="card border-0 rounded-4 shadow-sm mb-3 bg-white overflow-hidden">
      {/* Header Bar */}
      <div className="card-header bg-light border-bottom p-3 d-flex flex-wrap align-items-center justify-content-between gap-2">
        <div className="d-flex align-items-center gap-3">
          <div>
            <span className="text-muted d-block" style={{ fontSize: "11px" }}>ORDER ID</span>
            <span className="fw-bold text-dark font-monospace">#{order.id}</span>
          </div>
          <div className="vr d-none d-sm-block"></div>
          <div className="d-none d-sm-block">
            <span className="text-muted d-block" style={{ fontSize: "11px" }}>DATE PLACED</span>
            <span className="fw-medium text-dark">{order.date || "July 31, 2026"}</span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          {getStatusBadge(order.status)}
          <span className="fw-bold text-success fs-5">₹{order.totalAmount || order.total}</span>
        </div>
      </div>

      {/* Body: Items */}
      <div className="card-body p-3">
        <div className="d-flex flex-column gap-3">
          {order.items?.map((item, idx) => (
            <div key={idx} className="d-flex align-items-center justify-content-between gap-3">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={item.product?.image || item.image}
                  alt={item.product?.name || item.name}
                  className="rounded-3 object-fit-cover border"
                  style={{ width: 54, height: 54 }}
                />
                <div>
                  <h6 className="fw-bold text-dark mb-1" style={{ fontSize: "14px" }}>
                    {item.product?.name || item.name}
                  </h6>
                  <p className="text-muted small mb-0">
                    Qty: {item.quantity} × ₹{item.product?.price || item.price} ({item.selectedUnit || "kg"})
                  </p>
                  {item.product?.farmer && (
                    <span className="text-success small fw-medium" style={{ fontSize: "11px" }}>
                      🌱 Direct from Farmer {item.product.farmer.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="card-footer bg-white border-top p-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
        <span className="text-muted small d-flex align-items-center gap-1">
          <i className="bi bi-geo-alt-fill text-danger"></i>
          Delivering to: <strong className="text-dark">{order.shippingAddress || "Nashik, MH"}</strong>
        </span>

        <div className="d-flex gap-2">
          <Link
            to={`/buyer/orders/${order.id}/track`}
            className="btn btn-krishi-outline btn-sm rounded-pill px-3"
          >
            <i className="bi bi-geo-fill me-1"></i>Track Order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
