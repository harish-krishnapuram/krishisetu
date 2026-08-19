import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CategoryCard.css";

const FALLBACK_CATEGORY_IMAGE = "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80";

function CategoryCard({ category }) {
  if (!category) return null;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="h-100"
    >
      <Link
        to={`/shop?category=${encodeURIComponent(category.name)}`}
        className="text-decoration-none text-dark d-block h-100"
      >
        <div className="ks-category-card card border-0 rounded-4 overflow-hidden shadow-sm h-100 position-relative">
          <div className="category-img-wrapper overflow-hidden position-relative" style={{ height: "180px" }}>
            <img
              src={category.image || FALLBACK_CATEGORY_IMAGE}
              alt={category.name}
              className="w-100 h-100 object-fit-cover category-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = FALLBACK_CATEGORY_IMAGE;
              }}
            />
            <div className="img-overlay position-absolute top-0 start-0 w-100 h-100"></div>
          </div>
          <div className="card-body p-4 text-center bg-white d-flex flex-column align-items-center justify-content-center">
            <div className="category-icon-bubble mb-2 d-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success" style={{ width: 48, height: 48 }}>
              <i className={`bi ${category.icon || "bi-tag-fill"} fs-3`}></i>
            </div>
            <h6 className="fw-bold text-dark mb-1" style={{ fontSize: "16px" }}>
              {category.name}
            </h6>
            <span className="badge bg-light text-secondary border rounded-pill small fw-semibold px-3 py-1">
              {category.itemCount || 12}+ Products
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default CategoryCard;
