import { useAuth } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

function Topbar({ title = "Dashboard" }) {
  const { user, switchRole, role } = useAuth();

  return (
    <header className="ks-topbar bg-white border-bottom px-4 py-3 d-flex align-items-center justify-content-between sticky-top z-3 shadow-sm">
      {/* Title / Breadcrumb */}
      <div>
        <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: "20px" }}>{title}</h4>
        <span className="text-muted small">Welcome back, {user?.name || "Kisan Partner"}</span>
      </div>

      {/* Actions & Role Switcher */}
      <div className="d-flex align-items-center gap-3">
        {/* Quick Role Toggle Bar */}
        <div className="bg-light p-1 rounded-pill d-none d-md-flex align-items-center border">
          <button
            className={`btn btn-sm rounded-pill px-3 py-1 fw-bold ${role === "buyer" ? "btn-success text-white shadow-sm" : "btn-light text-secondary"}`}
            onClick={() => switchRole("buyer")}
            style={{ fontSize: "11px" }}
          >
            🛒 Buyer
          </button>
          <button
            className={`btn btn-sm rounded-pill px-3 py-1 fw-bold ${role === "farmer" ? "btn-success text-white shadow-sm" : "btn-light text-secondary"}`}
            onClick={() => switchRole("farmer")}
            style={{ fontSize: "11px" }}
          >
            🌾 Farmer
          </button>
          <button
            className={`btn btn-sm rounded-pill px-3 py-1 fw-bold ${role === "admin" ? "btn-success text-white shadow-sm" : "btn-light text-secondary"}`}
            onClick={() => switchRole("admin")}
            style={{ fontSize: "11px" }}
          >
            🛡️ Admin
          </button>
        </div>

        {/* Public Store Link */}
        <Link to="/" className="btn btn-outline-success btn-sm rounded-pill px-3 d-flex align-items-center gap-1">
          <i className="bi bi-globe"></i>
          <span className="d-none d-sm-inline">Public Shop</span>
        </Link>

        {/* User Profile Avatar */}
        <div className="d-flex align-items-center gap-2">
          <img
            src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"}
            alt={user?.name}
            className="rounded-circle border"
            style={{ width: 38, height: 38, objectFit: "cover" }}
          />
        </div>
      </div>
    </header>
  );
}

export default Topbar;
