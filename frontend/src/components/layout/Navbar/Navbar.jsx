import { useState } from "react";
import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import NavIcons from "./NavIcons";
import MobileMenu from "./MobileMenu";
import CartDrawer from "../../cart/CartDrawer";
import QuickCategoryChips from "../../common/QuickCategoryChips/QuickCategoryChips";
import { useAuth } from "../../../contexts/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { role, switchRole } = useAuth();
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  return (
    <>
      {/* Top Bar: Quick Demo Role Switcher */}
      <div className="bg-dark text-white py-1.5 px-3 border-bottom" style={{ fontSize: "12px" }}>
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-2" style={{ maxWidth: 1400 }}>
          <span className="text-white-50">
            🌱 <strong>KRISHISETU:</strong> Direct Farm-to-Consumer Agricultural Platform
          </span>

          <div className="d-flex align-items-center gap-2">
            <span className="text-white-50 d-none d-sm-inline">Switch Active Role:</span>
            <div className="btn-group btn-group-sm rounded-pill overflow-hidden bg-secondary bg-opacity-25 border border-secondary p-0.5">
              <button
                className={`btn btn-sm py-0.5 px-2.5 rounded-pill fw-bold ${role === "buyer" ? "btn-success text-white" : "btn-link text-white-50 text-decoration-none"}`}
                onClick={() => switchRole("buyer")}
                style={{ fontSize: "11px" }}
              >
                🛒 Buyer
              </button>
              <button
                className={`btn btn-sm py-0.5 px-2.5 rounded-pill fw-bold ${role === "farmer" ? "btn-success text-white" : "btn-link text-white-50 text-decoration-none"}`}
                onClick={() => switchRole("farmer")}
                style={{ fontSize: "11px" }}
              >
                🌾 Farmer
              </button>
              <button
                className={`btn btn-sm py-0.5 px-2.5 rounded-pill fw-bold ${role === "admin" ? "btn-success text-white" : "btn-link text-white-50 text-decoration-none"}`}
                onClick={() => switchRole("admin")}
                style={{ fontSize: "11px" }}
              >
                🛡️ Admin
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Navbar */}
      <header className="navbar-wrapper">
        <div className="container" style={{ maxWidth: 1400 }}>
          <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
              <Logo />
            </div>

            {/* Navigation Links */}
            <div className="navbar-center">
              <NavLinks />
            </div>

            {/* Search Box */}
            <div className="navbar-search-wrapper">
              <SearchBox />
            </div>

            {/* Right Side Icons & Profile */}
            <div className="navbar-right">
              <NavIcons onOpenCart={() => setIsCartDrawerOpen(true)} />
            </div>

            {/* Mobile Menu */}
            <div className="navbar-mobile">
              <MobileMenu />
            </div>
          </nav>
        </div>

        {/* Quick Category Chips */}
        <QuickCategoryChips />
      </header>

      {/* Quick Slide-Over Cart Drawer */}
      <CartDrawer isOpen={isCartDrawerOpen} onClose={() => setIsCartDrawerOpen(false)} />
    </>
  );
}

export default Navbar;