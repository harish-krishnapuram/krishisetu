import { motion } from "framer-motion";
import "./ReviewCard.css";

function ReviewCard({ review }) {
  if (!review) return null;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-100"
    >
      <div className="ks-review-card card border-0 rounded-4 shadow-sm p-4 h-100 bg-white d-flex flex-column justify-content-between position-relative">
        <i className="bi bi-quote position-absolute top-0 end-0 me-3 text-success opacity-25" style={{ fontSize: "3rem" }}></i>
        
        <div>
          {/* Star Rating */}
          <div className="d-flex align-items-center gap-1 text-warning mb-3">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`bi ${i < (review.rating || 5) ? "bi-star-fill" : "bi-star"}`}
              ></i>
            ))}
            <span className="text-dark fw-bold ms-2 small">{review.rating || 5}.0</span>
          </div>

          {/* Review Text */}
          <p className="text-secondary small fst-italic mb-4" style={{ lineHeight: "1.6" }}>
            "{review.comment || review.text}"
          </p>
        </div>

        {/* User / Buyer Profile Details */}
        <div className="d-flex align-items-center gap-3 pt-3 border-top">
          <img
            src={review.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"}
            alt={review.name}
            className="rounded-circle object-fit-cover"
            style={{ width: 44, height: 44 }}
          />
          <div>
            <h6 className="fw-bold text-dark mb-0" style={{ fontSize: "14px" }}>
              {review.name}
            </h6>
            <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill" style={{ fontSize: "10px" }}>
              <i className="bi bi-check-circle-fill me-1"></i>Verified Buyer
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ReviewCard;
