import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import HeroStats from "./HeroStats";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero py-5 ks-watermark-bg overflow-hidden position-relative">
      <div className="hero-container container">
        <div className="hero-grid">
          {/* Left Content Column */}
          <motion.div
            className="hero-content z-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Clean Professional Announcement Badge */}
            <div className="mb-3">
              <span className="hero-announcement-badge shadow-sm">
                🌱 Fresh Products Direct From Farmers
              </span>
            </div>

            {/* Main Hero Heading */}
            <h1 className="hero-heading text-dark mb-3">
              Bridging <span className="text-success">Farmers</span> & <span className="text-warning">Consumers</span>
            </h1>

            {/* Subtitle Description */}
            <p className="hero-description text-secondary mb-4">
              Buy fresh organic vegetables, sun-ripened fruits, A2 dairy, and heritage grains directly from verified Indian farmers with zero middleman commissions.
            </p>

            {/* Search Component */}
            <div className="mb-4">
              <SearchBar />
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <Link to="/shop" className="btn btn-krishi-primary btn-hero shadow-sm d-flex align-items-center gap-2">
                <i className="bi bi-bag-check-fill fs-5"></i>
                <span>Shop Now</span>
              </Link>

              <Link to="/register" className="btn btn-krishi-accent btn-hero shadow-sm d-flex align-items-center gap-2">
                <i className="bi bi-tree-fill fs-5"></i>
                <span>Become a Kisan Partner</span>
              </Link>
            </div>

            {/* Statistics */}
            <HeroStats />
          </motion.div>

          {/* Right Image Banner Column */}
          <motion.div
            className="hero-image-col z-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-image-card shadow-lg position-relative border border-3 border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
                alt="KrishiSetu Indian Agriculture Harvest"
                className="w-100 h-100 object-fit-cover hero-img"
              />

              {/* Glassmorphic Overlay Card 1 */}
              <div className="hero-badge badge-top-left p-3 rounded-4 shadow-md bg-white border d-flex align-items-center gap-3">
                <div className="rounded-circle bg-success bg-opacity-10 text-success p-2 fs-4 d-flex align-items-center justify-content-center" style={{ width: 46, height: 46 }}>
                  🌱
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-0" style={{ fontSize: "15px" }}>100% Organic</h6>
                  <span className="text-muted" style={{ fontSize: "12px" }}>Zero Chemicals</span>
                </div>
              </div>

              {/* Glassmorphic Overlay Card 2 */}
              <div className="hero-badge badge-bottom-right p-3 rounded-4 shadow-md bg-white border d-flex align-items-center gap-3">
                <div className="rounded-circle bg-warning bg-opacity-10 text-warning p-2 fs-4 d-flex align-items-center justify-content-center" style={{ width: 46, height: 46 }}>
                  🚜
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-0" style={{ fontSize: "15px" }}>Direct Farm Pick</h6>
                  <span className="text-muted" style={{ fontSize: "11px" }}>Fair Price to Kisans</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;