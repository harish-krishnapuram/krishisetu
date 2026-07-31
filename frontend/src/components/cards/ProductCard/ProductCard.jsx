import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useCart } from "../../../contexts/CartContext";
import { useWishlist } from "../../../contexts/WishlistContext";
import "./ProductCard.css";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const isLiked = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast.success(`🌱 Added 1 ${product.unit} of ${product.name} to Cart!`);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    if (!isLiked) {
      toast.info(`❤️ Saved ${product.name} to Wishlist!`);
    } else {
      toast.info(`Removed ${product.name} from Wishlist`);
    }
  };

  return (
    <motion.div
      className="ks-product-card h-100 position-relative rounded-4 overflow-hidden bg-white shadow-sm"
      whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(27, 94, 32, 0.12)" }}
      transition={{ duration: 0.25 }}
    >
      {/* Top Badges */}
      <div className="card-top-badges position-absolute top-0 start-0 p-3 d-flex flex-column gap-1 z-2">
        {product.isOrganic && (
          <span className="ks-badge-organic shadow-sm">
            <i className="bi bi-patch-check-fill me-1"></i>Organic
          </span>
        )}
        {product.discountPercentage > 0 && (
          <span className="badge bg-danger rounded-pill fw-bold" style={{ fontSize: "12px", padding: "5px 10px" }}>
            -{product.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        className={`wishlist-btn position-absolute top-0 end-0 m-3 border-0 rounded-circle d-flex align-items-center justify-content-center z-2 ${
          isLiked ? "active text-danger bg-white" : "bg-white text-secondary"
        }`}
        onClick={handleToggleWishlist}
        title={isLiked ? "Remove from wishlist" : "Add to wishlist"}
      >
        <i className={`bi ${isLiked ? "bi-heart-fill" : "bi-heart"}`}></i>
      </button>

      {/* Product Image Link */}
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
        <div className="card-img-wrapper position-relative overflow-hidden bg-light" style={{ height: "230px" }}>
          <img
            src={product.image || FALLBACK_IMAGE}
            alt={product.name}
            className="w-100 h-100 object-fit-cover product-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = FALLBACK_IMAGE;
            }}
          />
          {product.stock <= 5 && (
            <div className="position-absolute bottom-0 start-0 w-100 bg-warning text-dark text-center fw-bold py-1.5" style={{ fontSize: "12px" }}>
              ⚠️ Only {product.stock} items left in stock!
            </div>
          )}
        </div>
      </Link>

      {/* Card Content */}
      <div className="card-body p-4 d-flex flex-column justify-content-between">
        <div>
          {/* Category & Rating */}
          <div className="d-flex align-items-center justify-content-between mb-2" style={{ fontSize: "13px" }}>
            <span className="text-success fw-bold text-uppercase" style={{ letterSpacing: "0.5px" }}>{product.category}</span>
            <span className="d-flex align-items-center gap-1 text-dark fw-bold">
              <i className="bi bi-star-fill text-warning"></i>
              {product.rating} <span className="text-muted fw-normal">({product.ratingCount})</span>
            </span>
          </div>

          {/* Product Title */}
          <Link to={`/product/${product.id}`} className="text-decoration-none">
            <h5 className="card-title fw-bold text-dark mb-2 text-truncate" style={{ fontSize: "17px" }} title={product.name}>
              {product.name}
            </h5>
          </Link>

          {/* Farmer Info Badge */}
          {product.farmer && (
            <div className="farmer-info-chip d-flex align-items-center gap-2.5 p-2.5 rounded-3 bg-light mb-3">
              <img
                src={product.farmer.avatar}
                alt={product.farmer.name}
                className="rounded-circle"
                style={{ width: 28, height: 28, objectFit: "cover" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80";
                }}
              />
              <div className="text-truncate" style={{ fontSize: "13px" }}>
                <span className="text-muted d-block" style={{ fontSize: "10px", lineHeight: "1" }}>Farmer</span>
                <span className="fw-semibold text-dark text-truncate">{product.farmer.name}</span>
              </div>
            </div>
          )}
        </div>

        {/* Pricing & Add to Cart */}
        <div>
          <div className="d-flex align-items-baseline gap-2 mb-3">
            <span className="fs-4 fw-bold text-success">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-muted text-decoration-line-through fs-6">₹{product.originalPrice}</span>
            )}
            <span className="text-muted fs-6">/ {product.unit}</span>
          </div>

          <button
            className="btn btn-krishi-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2.5 fs-6"
            onClick={handleAddToCart}
          >
            <i className="bi bi-cart-plus-fill fs-5"></i>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
