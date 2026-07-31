import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { MOCK_ANALYTICS, MOCK_FARMERS, MOCK_CATEGORIES, MOCK_PRODUCTS } from "../../../data/mockData";
import { toast } from "react-toastify";

function AdminDashboard() {
  const [farmers, setFarmers] = useState(MOCK_FARMERS);

  const toggleVerifyFarmer = (id) => {
    setFarmers((prev) =>
      prev.map((f) => {
        if (f.id === id) {
          const updatedState = !f.isVerified;
          toast.info(
            updatedState
              ? `✅ Farmer ${f.name} verified successfully!`
              : `⚠️ Revoked verification for ${f.name}`
          );
          return { ...f, isVerified: updatedState };
        }
        return f;
      })
    );
  };

  return (
    <div className="admin-dashboard d-flex flex-column gap-4">
      {/* Admin Header Banner */}
      <div className="p-4 rounded-4 bg-dark text-white shadow-sm position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}>
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
          <div>
            <span className="badge bg-success text-white fw-bold px-3 py-1 mb-2 rounded-pill">
              🛡️ Super Administrator Control Center
            </span>
            <h2 className="fw-bold mb-1 text-white">KrishiSetu Platform Control</h2>
            <p className="mb-0 text-white-50 small">
              Real-time monitoring of verified farmers, buyers, crop listings, payments, and system compliance.
            </p>
          </div>
          <div className="d-flex gap-2">
            <span className="badge bg-primary fs-6 px-3 py-2 rounded-pill">
              API Status: Healthy (v2.6)
            </span>
          </div>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="row g-3">
        <div className="col-md-3">
          <div className="p-3 bg-white rounded-4 shadow-sm border">
            <div className="d-flex align-items-center justify-content-between">
              <span className="text-muted small fw-semibold">Platform Gross GMV</span>
              <i className="bi bi-cash-coin fs-4 text-success"></i>
            </div>
            <h3 className="fw-bold text-dark mt-2 mb-0">₹ 48.92 Lakhs</h3>
            <span className="text-success small fw-bold">+24.5% YoY Growth</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 bg-white rounded-4 shadow-sm border">
            <div className="d-flex align-items-center justify-content-between">
              <span className="text-muted small fw-semibold">Active Farmers</span>
              <i className="bi bi-people-fill fs-4 text-primary"></i>
            </div>
            <h3 className="fw-bold text-dark mt-2 mb-0">12,400 Kisan</h3>
            <span className="text-muted small">100% KYC Verified</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 bg-white rounded-4 shadow-sm border">
            <div className="d-flex align-items-center justify-content-between">
              <span className="text-muted small fw-semibold">Total Buyers</span>
              <i className="bi bi-cart-check-fill fs-4 text-warning"></i>
            </div>
            <h3 className="fw-bold text-dark mt-2 mb-0">85,000 Families</h3>
            <span className="text-success small fw-bold">Active Platform Users</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 bg-white rounded-4 shadow-sm border">
            <div className="d-flex align-items-center justify-content-between">
              <span className="text-muted small fw-semibold">Catalog Items</span>
              <i className="bi bi-tags-fill fs-4 text-danger"></i>
            </div>
            <h3 className="fw-bold text-dark mt-2 mb-0">{MOCK_PRODUCTS.length} Listed Crops</h3>
            <span className="text-muted small">{MOCK_CATEGORIES.length} Active Categories</span>
          </div>
        </div>
      </div>

      {/* Platform Order Volume Chart */}
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h5 className="fw-bold mb-0 text-dark">Platform Monthly Order Volume</h5>
            <span className="text-muted small">Total completed orders across all Indian state hubs</span>
          </div>
          <span className="badge bg-dark text-white rounded-pill px-3 py-2">Analytics 2026</span>
        </div>
        <div style={{ width: "100%", height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MOCK_ANALYTICS.salesChartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="month" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip
                formatter={(value) => [`${value} Orders`, "Completed Orders"]}
                contentStyle={{ borderRadius: "12px", border: "1px solid #E2E8F0" }}
              />
              <Bar dataKey="orders" fill="#1B5E20" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Governance & Verified Farmers Management Table */}
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h5 className="fw-bold mb-0 text-dark">Farmer Producer Verification Governance</h5>
            <span className="text-muted small">Review government identity & organic certificates</span>
          </div>
          <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill">
            {farmers.filter((f) => f.isVerified).length} / {farmers.length} Verified
          </span>
        </div>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Farmer Name</th>
                <th>Farm Estate</th>
                <th>Location</th>
                <th>Experience</th>
                <th>Total Sales</th>
                <th>Verification</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {farmers.map((farmer) => (
                <tr key={farmer.id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={farmer.avatar}
                        alt={farmer.name}
                        className="rounded-circle"
                        style={{ width: 40, height: 40, objectFit: "cover" }}
                      />
                      <div>
                        <span className="fw-bold text-dark d-block">{farmer.name}</span>
                        <span className="text-muted small">Rating: ⭐ {farmer.rating}</span>
                      </div>
                    </div>
                  </td>
                  <td className="fw-semibold text-secondary">{farmer.farmName}</td>
                  <td className="text-muted">{farmer.location}</td>
                  <td>{farmer.experience}</td>
                  <td className="fw-bold text-success">{farmer.totalSales}</td>
                  <td>
                    <span className={`badge rounded-pill ${farmer.isVerified ? "bg-success" : "bg-warning text-dark"}`}>
                      {farmer.isVerified ? "VERIFIED KISAN" : "PENDING KYC"}
                    </span>
                  </td>
                  <td className="text-end">
                    <button
                      className={`btn btn-sm rounded-pill px-3 fw-bold ${farmer.isVerified ? "btn-outline-danger" : "btn-success"}`}
                      onClick={() => toggleVerifyFarmer(farmer.id)}
                    >
                      {farmer.isVerified ? "Revoke" : "Approve KYC"}
                    </button>
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

export default AdminDashboard;
