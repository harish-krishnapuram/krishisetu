import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { useWishlist } from "../../../contexts/WishlistContext";
import { useAuth } from "../../../contexts/AuthContext";

function NavIcons({ onOpenCart }) {
  const { totalItemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    if (user?.role === "farmer") navigate("/farmer/dashboard");
    else if (user?.role === "admin") navigate("/admin/dashboard");
    else navigate("/buyer/dashboard");
  };

  return (
    <div className="nav-icons d-flex align-items-center gap-3">
      {/* Wishlist */}
      <Link to="/buyer/wishlist" className="icon-btn" title="Wishlist">
        <i className="bi bi-heart"></i>
        {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
      </Link>

      {/* Cart (Opens Drawer if prop provided, else links to /cart) */}
      <button
        type="button"
        className="icon-btn border-0 bg-transparent"
        title="Shopping Cart"
        onClick={onOpenCart ? onOpenCart : () => navigate("/cart")}
      >
        <i className="bi bi-cart3"></i>
        {totalItemCount > 0 && <span className="badge">{totalItemCount}</span>}
      </button>

      {/* Notifications */}
      <Link to="/buyer/notifications" className="icon-btn" title="Notifications">
        <i className="bi bi-bell"></i>
        <span className="badge">3</span>
      </Link>

      {/* Auth / Profile Dropdown */}
      {isAuthenticated && user ? (
        <div className="dropdown">
          <button
            className="btn border-0 bg-transparent dropdown-toggle d-flex align-items-center gap-2 p-1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"}
              alt={user.name}
              className="profile-img rounded-circle border border-2 border-success"
              style={{ width: 40, height: 40, objectFit: "cover" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80";
              }}
            />
            <span className="fw-bold text-dark small d-none d-xl-inline">
              {user.name.split(" ")[0]}
            </span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-4 p-2 mt-2">
            <li className="px-3 py-2 border-bottom">
              <span className="fw-bold d-block text-dark small">{user.name}</span>
              <span className="badge bg-success text-capitalize" style={{ fontSize: "10px" }}>
                {user.role} Portal
              </span>
            </li>
            <li>
              <button className="dropdown-item rounded-3 mt-1 py-2 text-dark fw-medium" onClick={handleDashboardClick}>
                <i className="bi bi-speedometer2 me-2 text-success"></i> My Portal Dashboard
              </button>
            </li>
            <li>
              <button className="dropdown-item rounded-3 py-2 text-danger fw-medium" onClick={logout}>
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/login" className="login-btn">
          <i className="bi bi-person-circle fs-5"></i>
          <span>Login</span>
        </Link>
      )}
    </div>
  );
}

export default NavIcons;