import { NavLink } from "react-router-dom";
import { navLinks } from "./navData";

function NavLinks() {
  return (
    <ul className="nav-links">
      {navLinks.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;