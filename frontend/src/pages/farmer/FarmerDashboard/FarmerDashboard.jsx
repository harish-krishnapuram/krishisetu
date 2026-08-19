import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { MOCK_ANALYTICS, MOCK_PRODUCTS, MOCK_ORDERS } from "../../../data/mockData";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

function FarmerDashboard() {
  const { user } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCropName, setNewCropName] = useState("");
  const [newCropPrice, setNewCropPrice] = useState("");
  const [newCropStock, setNewCropStock] = useState("");

  const handleAddCrop = (e) => {
    e.preventDefault();
    if (!newCropName || !newCropPrice) {
      toast.error("Please fill in crop title and price");
      return;
    }
    toast.success(`🎉 Crop '${newCropName}' published successfully to KrishiSetu Marketplace!`);
    setShowAddModal(false);
    setNewCropName("");
    setNewCropPrice("");
    setNewCropStock("");
  };

  return (
    <div className="farmer-dashboard d-flex flex-column gap-4">
      {/* Header Banner */}
      <div className="p-4 rounded-4 bg-success text-white shadow-sm position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)" }}>
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 position-relative z-2">
          <div>
            <span className="badge bg-warning text-dark fw-bold px-3 py-1 mb-2 rounded-pill">
              🌾 Verified Kisan Producer
            </span>
            <h2 className="fw-bold mb-1 text-white">{user?.farmName || "Green Harvest Organic Estate"}</h2>
            <p className="mb-0 text-white-50 small">
              Managed by <strong className="text-white">{user?.name}</strong> • Location: Nashik, Maharashtra
            </p>
          </div>
          <button
            className="btn btn-krishi-accent btn-lg shadow-sm d-flex align-items-center gap-2"
            onClick={() => setShowAddModal(true)}
          >
            <i className="bi bi-plus-circle-fill"></i>
            <span>List New Crop</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="row g-3">
        <div className="col-md-3">
          <div className="p-3 bg-white rounded-4 shadow-sm border">
            <span className="text-muted small fw-semibold text-uppercase">Monthly Harvest Revenue</span>
            <h3 className="fw-bold text-success mb-1">₹ 2,84,500</h3>
            <span className="badge bg-success bg-opacity-10 text-success fw-bold">
              <i className="bi bi-graph-up-arrow me-1"></i>+18.4% vs last month
            </span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 bg-white rounded-4 shadow-sm border">
            <span className="text-muted small fw-semibold text-uppercase">Total Crop Orders</span>
            <h3 className="fw-bold text-dark mb-1">348 Orders</h3>
            <span className="badge bg-info bg-opacity-10 text-primary fw-bold">
              14 Pending Dispatch
            </span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 bg-white rounded-4 shadow-sm border">
            <span className="text-muted small fw-semibold text-uppercase">Listed Products</span>
            <h3 className="fw-bold text-dark mb-1">{MOCK_PRODUCTS.length} Crops</h3>
            <span className="badge bg-success bg-opacity-10 text-success fw-bold">
              100% Organic Certified
            </span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 bg-white rounded-4 shadow-sm border">
            <span className="text-muted small fw-semibold text-uppercase">Farmer Rating</span>
            <h3 className="fw-bold text-warning mb-1">4.9 ⭐</h3>
            <span className="text-muted small">Based on 148 Buyer Reviews</span>
          </div>
        </div>
      </div>

      {/* Recharts Analytics Chart */}
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h5 className="fw-bold mb-0 text-dark">Crop Revenue & Harvest Trend</h5>
            <span className="text-muted small">Monthly earnings directly transferred to your bank account</span>
          </div>
          <span className="badge bg-light text-dark border px-3 py-2 fw-semibold">Year 2026</span>
        </div>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_ANALYTICS.salesChartData}>
              <defs>
                <linearGradient id="farmerColorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1B5E20" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#1B5E20" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="month" stroke="#64748B" />
              <YAxis stroke="#64748B" tickFormatter={(v) => `₹${v / 1000}k`} />
              <Tooltip
                formatter={(value) => [`₹${Number(value).toLocaleString()}`, "Revenue"]}
                contentStyle={{ borderRadius: "12px", border: "1px solid #E2E8F0" }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#1B5E20"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#farmerColorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Inventory & Incoming Orders */}
      <div className="row g-3">
        {/* Active Inventory List */}
        <div className="col-md-7">
          <div className="bg-white p-4 rounded-4 border shadow-sm h-100">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="fw-bold mb-0 text-dark">Crop Inventory Health</h5>
              <Link to="/farmer/inventory" className="btn btn-sm btn-outline-success rounded-pill px-3">
                Manage Stock
              </Link>
            </div>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Crop Item</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_PRODUCTS.slice(0, 4).map((p) => (
                    <tr key={p.id}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <img src={p.image} alt={p.name} className="rounded-3" style={{ width: 36, height: 36, objectFit: "cover" }} />
                          <span className="fw-semibold text-truncate" style={{ maxWidth: 160 }}>{p.name}</span>
                        </div>
                      </td>
                      <td className="fw-bold text-success">₹{p.price}/{p.unit}</td>
                      <td>{p.stock} units</td>
                      <td>
                        <span className={`badge rounded-pill ${p.stock > 100 ? "bg-success" : "bg-warning text-dark"}`}>
                          {p.stock > 100 ? "In Stock" : "Low Stock"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Buyer Orders */}
        <div className="col-md-5">
          <div className="bg-white p-4 rounded-4 border shadow-sm h-100">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="fw-bold mb-0 text-dark">Incoming Buyer Orders</h5>
              <Link to="/farmer/orders" className="text-success small fw-bold">View All</Link>
            </div>
            <div className="d-flex flex-column gap-3">
              {MOCK_ORDERS.map((ord) => (
                <div key={ord.id} className="p-3 rounded-3 bg-light border d-flex align-items-center justify-content-between">
                  <div>
                    <span className="fw-bold text-dark d-block">{ord.id}</span>
                    <span className="text-muted small">{ord.customerName} • {ord.items.length} Items</span>
                  </div>
                  <div className="text-end">
                    <span className="fw-bold text-success d-block">₹{ord.totalAmount}</span>
                    <span className="badge bg-warning text-dark" style={{ fontSize: "10px" }}>{ord.orderStatus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Crop Modal */}
      {showAddModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark">🌱 List New Crop for Direct Sale</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <form onSubmit={handleAddCrop}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Crop Name / Product Title</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="e.g. Organic Alphonso Mangoes"
                      value={newCropName}
                      onChange={(e) => setNewCropName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <label className="form-label fw-semibold">Price per Unit (₹)</label>
                      <input
                        type="number"
                        className="form-control rounded-3"
                        placeholder="e.g. 50"
                        value={newCropPrice}
                        onChange={(e) => setNewCropPrice(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label fw-semibold">Available Stock</label>
                      <input
                        type="number"
                        className="form-control rounded-3"
                        placeholder="e.g. 500"
                        value={newCropStock}
                        onChange={(e) => setNewCropStock(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Farming Type</label>
                    <select className="form-select rounded-3">
                      <option>100% Organic Certified</option>
                      <option>Natural Farming (Zero Chemical)</option>
                      <option>Conventional Harvest</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0">
                  <button type="button" className="btn btn-light rounded-pill" onClick={() => setShowAddModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-krishi-primary">
                    Publish to Market
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FarmerDashboard;
