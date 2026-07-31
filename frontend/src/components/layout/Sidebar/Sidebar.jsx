import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import Logo from "../Logo/Logo";
import "./Sidebar.css";

function Sidebar({ role = "buyer" }) {
  const { user, logout, switchRole } = useAuth();
  const navigate = useNavigate();

  // Menu configurations for each portal
  const buyerMenu = [
    { label: "Dashboard", path: "/buyer/dashboard", icon: "bi-grid-1x2-fill" },
    { label: "Browse Crops", path: "/shop", icon: "bi-shop" },
    { label: "My Orders", path: "/buyer/orders", icon: "bi-bag-check-fill" },
    { label: "Wishlist", path: "/buyer/wishlist", icon: "bi-heart-fill" },
    { label: "Cart & Checkout", path: "/cart", icon: "bi-cart-fill" },
    { label: "Notifications", path: "/buyer/notifications", icon: "bi-bell-fill" },
    { label: "Reviews & Ratings", path: "/buyer/reviews", icon: "bi-star-fill" },
    { label: "My Profile", path: "/buyer/profile", icon: "bi-person-circle" },
    { label: "Account Settings", path: "/buyer/settings", icon: "bi-gear-fill" }
  ];

  const farmerMenu = [
    { label: "Farmer Dashboard", path: "/farmer/dashboard", icon: "bi-speedometer2" },
    { label: "Manage Products", path: "/farmer/products", icon: "bi-box-seam-fill" },
    { label: "Stock Inventory", path: "/farmer/inventory", icon: "bi-boxes" },
    { label: "Incoming Orders", path: "/farmer/orders", icon: "bi-bag-dash-fill" },
    { label: "Sales & Revenue", path: "/farmer/sales-report", icon: "bi-graph-up-arrow" },
    { label: "Crop Reviews", path: "/farmer/reviews", icon: "bi-star-half" },
    { label: "Farm Profile", path: "/farmer/profile", icon: "bi-person-badge-fill" }
  ];

  const adminMenu = [
    { label: "Admin Overview", path: "/admin/dashboard", icon: "bi-shield-shaded" },
    { label: "Manage Farmers", path: "/admin/farmers", icon: "bi-people-fill" },
    { label: "Manage Buyers", path: "/admin/buyers", icon: "bi-person-lines-fill" },
    { label: "Product Catalog", path: "/admin/products", icon: "bi-shop-window" },
    { label: "Crop Categories", path: "/admin/categories", icon: "bi-tags-fill" },
    { label: "Platform Orders", path: "/admin/orders", icon: "bi-receipt" },
    { label: "Financial Reports", path: "/admin/reports", icon: "bi-pie-chart-fill" },
    { label: "System Settings", path: "/admin/settings", icon: "bi-sliders" }
  ];

  const activeMenu = role === "farmer" ? farmerMenu : role === "admin" ? adminMenu : buyerMenu;

  return (
    <aside className="ks-sidebar d-flex flex-column justify-content-between p-3 bg-white shadow-sm border-end">
      <div>
        {/* Brand Logo */}
        <div className="sidebar-brand mb-4 px-2 pt-2">
          <Logo />
        </div>

        {/* User Card */}
        <div className="user-profile-card p-3 rounded-4 bg-light mb-4 d-flex align-items-center gap-3">
          <img
            src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"}
            alt={user?.name}
            className="rounded-circle object-fit-cover"
            style={{ width: 44, height: 44 }}
          />
          <div className="overflow-hidden">
            <h6 className="fw-bold mb-0 text-dark text-truncate" style={{ fontSize: "14px" }}>
              {user?.name || "KrishiSetu User"}
            </h6>
            <span className="badge bg-success text-capitalize" style={{ fontSize: "10px" }}>
              {role} Portal
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="sidebar-nav">
          <p className="px-2 text-uppercase text-muted fw-bold mb-2" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
            Main Menu
          </p>
          <ul className="nav flex-column gap-1 list-unstyled">
            {activeMenu.map((item, idx) => (
              <li key={idx} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-link d-flex align-items-center gap-3 px-3 py-2.5 rounded-3 text-decoration-none fw-medium ${
                      isActive ? "active-link text-white bg-success shadow-sm" : "text-secondary"
                    }`
                  }
                >
                  <i className={`bi ${item.icon} fs-5`}></i>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Controls & Logout */}
      <div className="sidebar-footer pt-3 border-top">
        <button
          className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill py-2"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
