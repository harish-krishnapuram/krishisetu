import { Link } from "react-router-dom";
import WatermarkBg from "../../../components/common/WatermarkBg/WatermarkBg";

function About() {
  return (
    <WatermarkBg className="about-page py-5 bg-app">
      <div className="container">
        {/* Hero Section */}
        <div className="p-4 p-md-5 rounded-4 bg-success text-white shadow-sm mb-5" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)" }}>
          <span className="badge bg-warning text-dark fw-bold px-3 py-1 mb-2 rounded-pill">
            🌿 OUR MISSION & VISION
          </span>
          <h1 className="display-5 fw-bold text-white mb-3">About KRISHISETU</h1>
          <p className="lead text-white-50 mb-0" style={{ maxWidth: 680 }}>
            "Bridging Farmers & Consumers" — We are building India's premier digital agriculture marketplace that eliminates middleman markups and connects verified Kisans directly with households and bulk buyers.
          </p>
        </div>

        {/* Value Pillars */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="bg-white p-4 rounded-4 shadow-sm border h-100 text-center">
              <div className="rounded-circle bg-success bg-opacity-10 text-success p-3 d-inline-flex mb-3">
                <i className="bi bi-shield-check fs-2"></i>
              </div>
              <h5 className="fw-bold text-dark mb-2">Fair Price to Kisans</h5>
              <p className="text-secondary small mb-0">
                Farmers set their own crop prices and keep up to 96.5% of the sales revenue, empowering rural agricultural economies.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-white p-4 rounded-4 shadow-sm border h-100 text-center">
              <div className="rounded-circle bg-warning bg-opacity-10 text-warning p-3 d-inline-flex mb-3">
                <i className="bi bi-patch-check fs-2"></i>
              </div>
              <h5 className="fw-bold text-dark mb-2">100% Traceable Harvest</h5>
              <p className="text-secondary small mb-0">
                Every crop listed includes fresh harvest timestamps, farm location details, soil type specs, and organic verification badges.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-white p-4 rounded-4 shadow-sm border h-100 text-center">
              <div className="rounded-circle bg-primary bg-opacity-10 text-primary p-3 d-inline-flex mb-3">
                <i className="bi bi-truck fs-2"></i>
              </div>
              <h5 className="fw-bold text-dark mb-2">Direct Farm Delivery</h5>
              <p className="text-secondary small mb-0">
                Freshly harvested crops are picked directly from regional farm estates and delivered straight to city doorsteps.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-white p-5 rounded-4 border shadow-sm text-center">
          <h3 className="fw-bold text-dark mb-2">Join the Direct Agriculture Revolution</h3>
          <p className="text-muted mb-4">Whether you are a consumer seeking farm-fresh produce or a Kisan wanting fair crop prices, KrishiSetu welcomes you.</p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/shop" className="btn btn-krishi-primary px-4 py-2">
              Start Shopping
            </Link>
            <Link to="/register" className="btn btn-krishi-accent px-4 py-2">
              Become a Kisan Partner
            </Link>
          </div>
        </div>
      </div>
    </WatermarkBg>
  );
}

export default About;