import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useCart } from "../../../contexts/CartContext";
import { useWishlist } from "../../../contexts/WishlistContext";
import { MOCK_ORDERS, MOCK_PRODUCTS } from "../../../data/mockData";
import ProductCard from "../../../components/cards/ProductCard/ProductCard";

function BuyerDashboard() {
  const { user } = useAuth();
  const { totalItemCount } = useCart();
  const { wishlistCount } = useWishlist();

  const recentOrders = MOCK_ORDERS.slice(0, 2);
  const recommendedCrops = MOCK_PRODUCTS.slice(0, 3);

  return (
    <div className="buyer-dashboard d-flex flex-column gap-4">
      {/* Welcome Banner */}
      <div className="p-4 rounded-4 bg-success text-white shadow-sm position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #388E3C 100%)" }}>
        <div className="position-relative z-2">
          <span className="badge bg-warning text-dark fw-bold px-3 py-1 mb-2 rounded-pill">
            🌱 Consumer Account
          </span>
          <h2 className="fw-bold mb-1 text-white">Hello, {user?.name || "Kisan Buyer"}!</h2>
          <p className="mb-0 text-white-50" style={{ maxWidth: "600px" }}>
            Explore fresh organic crops harvested today directly by verified Indian farmers. Delivered right to your doorstep with zero middleman markup.
          </p>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="p-3 bg-white rounded-4 shadow-sm border d-flex align-items-center gap-3">
            <div className="rounded-circle bg-success bg-opacity-10 text-success p-3 fs-3 d-flex align-items-center justify-content-center" style={{ width: 54, height: 54 }}>
              <i className="bi bi-bag-check-fill"></i>
            </div>
            <div>
              <span className="text-muted small fw-semibold">Total Orders</span>
              <h4 className="fw-bold mb-0 text-dark">12 Completed</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white rounded-4 shadow-sm border d-flex align-items-center gap-3">
            <div className="rounded-circle bg-danger bg-opacity-10 text-danger p-3 fs-3 d-flex align-items-center justify-content-center" style={{ width: 54, height: 54 }}>
              <i className="bi bi-heart-fill"></i>
            </div>
            <div>
              <span className="text-muted small fw-semibold">Wishlist Items</span>
              <h4 className="fw-bold mb-0 text-dark">{wishlistCount} Saved Crops</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white rounded-4 shadow-sm border d-flex align-items-center gap-3">
            <div className="rounded-circle bg-warning bg-opacity-10 text-warning p-3 fs-3 d-flex align-items-center justify-content-center" style={{ width: 54, height: 54 }}>
              <i className="bi bi-cart-fill"></i>
            </div>
            <div>
              <span className="text-muted small fw-semibold">Active Cart</span>
              <h4 className="fw-bold mb-0 text-dark">{totalItemCount} Items</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h5 className="fw-bold mb-0 text-dark">Recent Crop Orders</h5>
            <span className="text-muted small">Track your active shipments & farm dispatches</span>
          </div>
          <Link to="/buyer/orders" className="btn btn-outline-success btn-sm rounded-pill px-3 fw-semibold">
            View All Orders
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th className="fw-semibold text-secondary">Order ID</th>
                <th className="fw-semibold text-secondary">Date</th>
                <th className="fw-semibold text-secondary">Items</th>
                <th className="fw-semibold text-secondary">Farmer</th>
                <th className="fw-semibold text-secondary">Total</th>
                <th className="fw-semibold text-secondary">Status</th>
                <th className="fw-semibold text-secondary text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="fw-bold text-success">{order.id}</td>
                  <td className="text-muted">{order.date}</td>
                  <td>
                    <span className="fw-medium">{order.items.length} Crop Items</span>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border fw-semibold">{order.farmerName}</span>
                  </td>
                  <td className="fw-bold text-dark">₹{order.totalAmount}</td>
                  <td>
                    <span className={`badge rounded-pill ${order.orderStatus === "Delivered" ? "bg-success" : "bg-warning text-dark"}`}>
                      {order.orderStatus}
                    </span>
                  </td>
                  <td className="text-end">
                    <Link to={`/buyer/orders/${order.id}/track`} className="btn btn-sm btn-krishi-outline py-1 px-3">
                      Track Order
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommended Fresh Crops */}
      <div>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="fw-bold mb-0 text-dark">Recommended Fresh Crops for You</h5>
          <Link to="/shop" className="text-success text-decoration-none fw-semibold small">
            Browse Market &rarr;
          </Link>
        </div>
        <div className="row g-3">
          {recommendedCrops.map((crop) => (
            <div key={crop.id} className="col-md-4">
              <ProductCard product={crop} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyerDashboard;
