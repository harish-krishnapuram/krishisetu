import { Link } from "react-router-dom";
import logo from "../../../assets/logos/logo.jpeg";
import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="logo d-flex align-items-center gap-2 text-decoration-none">
      <img
        src={logo}
        alt="KrishiSetu Logo"
        className="logo-img rounded-circle object-fit-cover shadow-sm"
        style={{ width: 44, height: 44 }}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />

      <div className="logo-text">
        <h4 className="fw-extrabold text-success mb-0" style={{ letterSpacing: "0.5px", fontSize: "20px" }}>
          KRISHI<span className="text-warning">SETU</span>
        </h4>
        <small className="text-muted d-block fw-medium" style={{ fontSize: "10px", lineHeight: "1" }}>
          Bridging Farmers & Consumers
        </small>
      </div>
    </Link>
  );
}

export default Logo;