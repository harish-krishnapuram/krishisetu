import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./navData";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <li>
            <NavLink to="/login" onClick={() => setIsOpen(false)}>
              Login
            </NavLink>
          </li>

          <li>
            <NavLink to="/register" onClick={() => setIsOpen(false)}>
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;