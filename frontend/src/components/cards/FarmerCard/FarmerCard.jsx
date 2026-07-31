import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./FarmerCard.css";

const FALLBACK_AVATAR = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80";

function FarmerCard({ farmer }) {
  if (!farmer) return null;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="h-100"
    >
      <div className="ks-farmer-card card border-0 rounded-4 shadow-sm h-100 overflow-hidden bg-white p-4 d-flex flex-column justify-content-between">
        <div>
          {/* Header Banner & Avatar */}
          <div className="farmer-card-header text-center mb-3">
            <div className="position-relative d-inline-block mb-2">
              <img
                src={farmer.avatar || FALLBACK_AVATAR}
                alt={farmer.name}
                className="rounded-circle object-fit-cover shadow-sm border border-3 border-success"
                style={{ width: 90, height: 90 }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FALLBACK_AVATAR;
                }}
              />
              <span className="badge bg-success position-absolute bottom-0 end-0 rounded-circle p-1.5" title="Verified Organic Farmer">
                <i className="bi bi-patch-check-fill text-white fs-5"></i>
              </span>
            </div>
            <h5 className="fw-bold text-dark mb-1" style={{ fontSize: "18px" }}>{farmer.name}</h5>
            <p className="text-success fw-bold small mb-1">{farmer.farmName || "Kisan Organic Farm"}</p>
            <p className="text-muted small mb-0 d-flex align-items-center justify-content-center gap-1">
              <i className="bi bi-geo-alt-fill text-danger"></i>
              {farmer.location || "Nashik, Maharashtra"}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="row g-2 text-center bg-light rounded-3 p-2.5 mb-3">
            <div className="col-4 border-end">
              <span className="d-block fw-bold text-dark small">{farmer.rating || 4.9} ★</span>
              <span className="text-muted" style={{ fontSize: "11px" }}>Rating</span>
            </div>
            <div className="col-4 border-end">
              <span className="d-block fw-bold text-dark small">{farmer.totalSales || farmer.totalProduce || "1.2 Tons"}</span>
              <span className="text-muted" style={{ fontSize: "11px" }}>Sold</span>
            </div>
            <div className="col-4">
              <span className="d-block fw-bold text-dark small">{farmer.experience || "12 Yrs"}</span>
              <span className="text-muted" style={{ fontSize: "11px" }}>Exp.</span>
            </div>
          </div>

          {/* Specialty Crop Badges */}
          <div className="d-flex flex-wrap gap-1.5 mb-3">
            {farmer.specialties ? (
              farmer.specialties.map((spec, i) => (
                <span key={i} className="ks-badge-organic" style={{ fontSize: "11px" }}>
                  {spec}
                </span>
              ))
            ) : (
              <>
                <span className="ks-badge-organic" style={{ fontSize: "11px" }}>🌾 Organic Grains</span>
                <span className="ks-badge-direct" style={{ fontSize: "11px" }}>🍅 Fresh Veggies</span>
              </>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/shop?farmer=${encodeURIComponent(farmer.name)}`}
          className="btn btn-krishi-outline w-100 text-center text-decoration-none py-2.5 fw-bold"
        >
          View Farmer's Produce
        </Link>
      </div>
    </motion.div>
  );
}

export default FarmerCard;
