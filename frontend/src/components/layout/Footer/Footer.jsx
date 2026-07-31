import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer className="ks-footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Brand Col */}
          <div className="col-12 col-lg-4">
            <div className="mb-3">
              <Logo />
            </div>
            <p className="text-white-50 small mb-4" style={{ maxWidth: 320 }}>
              KrishiSetu connects Indian farmers directly with consumers, empowering rural livelihoods and delivering fresh, 100% organic produce to urban households.
            </p>
            <div className="d-flex gap-3">
              <a href="#social" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#social" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }}>
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#social" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#social" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }}>
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: "12px", letterSpacing: "1px" }}>
              Public Marketplace
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-white-50">
              <li><Link to="/shop" className="text-white-50 text-decoration-none hover-white">Browse Fresh Crops</Link></li>
              <li><Link to="/shop" className="text-white-50 text-decoration-none">Organic Vegetables</Link></li>
              <li><Link to="/shop" className="text-white-50 text-decoration-none">Sun-Ripened Fruits</Link></li>
              <li><Link to="/shop" className="text-white-50 text-decoration-none">A2 Cow Ghee & Milk</Link></li>
              <li><Link to="/shop" className="text-white-50 text-decoration-none">Cold-Pressed Oils</Link></li>
            </ul>
          </div>

          {/* Portals */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: "12px", letterSpacing: "1px" }}>
              Multi-Role Portals
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-white-50">
              <li><Link to="/buyer/dashboard" className="text-white-50 text-decoration-none">Buyer Dashboard</Link></li>
              <li><Link to="/farmer/dashboard" className="text-white-50 text-decoration-none">Farmer Producer Portal</Link></li>
              <li><Link to="/admin/dashboard" className="text-white-50 text-decoration-none">Super Admin Center</Link></li>
              <li><Link to="/login" className="text-white-50 text-decoration-none">Member Login</Link></li>
              <li><Link to="/register" className="text-white-50 text-decoration-none">Become a Kisan Partner</Link></li>
            </ul>
          </div>

          {/* Mobile App Download */}
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: "12px", letterSpacing: "1px" }}>
              Download KrishiSetu Kisan App
            </h6>
            <p className="text-white-50 small mb-3">
              Get real-time crop dispatch tracking and harvest updates directly on your mobile device.
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-light d-flex align-items-center gap-2 rounded-3 px-3 py-2 text-start">
                <i className="bi bi-google-play fs-3"></i>
                <div>
                  <span className="d-block text-uppercase text-white-50" style={{ fontSize: "9px" }}>GET IT ON</span>
                  <span className="fw-bold small d-block">Google Play</span>
                </div>
              </button>
              <button className="btn btn-outline-light d-flex align-items-center gap-2 rounded-3 px-3 py-2 text-start">
                <i className="bi bi-apple fs-3"></i>
                <div>
                  <span className="d-block text-uppercase text-white-50" style={{ fontSize: "9px" }}>DOWNLOAD ON THE</span>
                  <span className="fw-bold small d-block">App Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-top border-secondary pt-3 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 text-white-50 small">
          <span>© 2026 KRISHISETU. All Rights Reserved. "Bridging Farmers & Consumers"</span>
          <div className="d-flex gap-3">
            <a href="#privacy" className="text-white-50 text-decoration-none">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="text-white-50 text-decoration-none">Terms of Service</a>
            <span>•</span>
            <a href="#kyc" className="text-white-50 text-decoration-none">Farmer KYC Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;