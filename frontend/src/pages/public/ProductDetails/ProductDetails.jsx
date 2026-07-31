import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MOCK_PRODUCTS, MOCK_REVIEWS } from "../../../data/mockData";
import { useCart } from "../../../contexts/CartContext";
import { useWishlist } from "../../../contexts/WishlistContext";
import ProductCard from "../../../components/cards/ProductCard/ProductCard";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find((p) => p.id === id) || MOCK_PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedUnit, setSelectedUnit] = useState(product.unit);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isLiked = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedUnit);
    toast.success(`🌱 Added ${quantity} ${selectedUnit} of ${product.name} to Cart!`);
  };

  const relatedProducts = MOCK_PRODUCTS.filter(
    (p) => p.id !== product.id && (p.categoryId === product.categoryId || p.farmer.id === product.farmer.id)
  ).slice(0, 3);

  return (
    <div className="product-details-page py-5 bg-app">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/" className="text-success text-decoration-none">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/shop" className="text-success text-decoration-none">Marketplace</Link></li>
            <li className="breadcrumb-item active text-truncate" style={{ maxWidth: 200 }}>{product.name}</li>
          </ol>
        </nav>

        {/* Main Product Card */}
        <div className="bg-white p-4 rounded-4 shadow-sm border mb-5">
          <div className="row g-4">
            {/* Gallery Section */}
            <div className="col-md-6">
              <div className="main-img-box rounded-4 overflow-hidden bg-light mb-3" style={{ height: 380 }}>
                <img src={activeImage} alt={product.name} className="w-100 h-100 object-fit-cover" />
              </div>
              {product.gallery && product.gallery.length > 1 && (
                <div className="d-flex gap-2">
                  {product.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      className={`btn p-0 rounded-3 overflow-hidden border ${activeImage === imgUrl ? "border-success border-2" : "border-transparent"}`}
                      style={{ width: 70, height: 70 }}
                      onClick={() => setActiveImage(imgUrl)}
                    >
                      <img src={imgUrl} alt="thumbnail" className="w-100 h-100 object-fit-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details Content */}
            <div className="col-md-6 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  {product.isOrganic && <span className="ks-badge-organic">100% Organic</span>}
                  <span className="ks-badge-direct">Direct Farm Harvest</span>
                </div>

                <h2 className="fw-bold text-dark mb-2">{product.name}</h2>

                {/* Rating & Stock */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="d-flex align-items-center gap-1 text-warning fw-bold">
                    <i className="bi bi-star-fill"></i>
                    <span>{product.rating}</span>
                    <span className="text-muted fw-normal">({product.ratingCount} reviews)</span>
                  </div>
                  <span className="text-muted">|</span>
                  <span className="text-success fw-semibold">
                    <i className="bi bi-check-circle-fill me-1"></i>In Stock ({product.stock} {product.unit})
                  </span>
                </div>

                {/* Pricing Box */}
                <div className="p-3 bg-light rounded-4 mb-4 d-flex align-items-baseline gap-3">
                  <span className="fs-2 fw-bold text-success">₹{product.price}</span>
                  <span className="text-muted text-decoration-line-through fs-5">₹{product.originalPrice}</span>
                  <span className="badge bg-danger rounded-pill fw-bold fs-6">
                    Save {product.discountPercentage}%
                  </span>
                </div>

                {/* Harvest Timestamp */}
                <div className="p-3 rounded-3 bg-success bg-opacity-10 border border-success border-opacity-25 mb-4">
                  <span className="fw-bold text-success d-block mb-1">🌱 Fresh Harvest Timestamp</span>
                  <p className="text-dark small mb-0">{product.harvestDate} • Direct from {product.farmer.location}</p>
                </div>

                {/* Quantity & Unit Selection */}
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <label className="form-label small fw-semibold text-secondary">Select Pack Size</label>
                    <select
                      className="form-select rounded-pill"
                      value={selectedUnit}
                      onChange={(e) => setSelectedUnit(e.target.value)}
                    >
                      {product.unitOptions?.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <label className="form-label small fw-semibold text-secondary">Quantity</label>
                    <div className="d-flex align-items-center border rounded-pill overflow-hidden bg-light" style={{ height: 38 }}>
                      <button className="btn btn-light px-3 fw-bold border-0" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                      <span className="flex-grow-1 text-center fw-bold">{quantity}</span>
                      <button className="btn btn-light px-3 fw-bold border-0" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-3">
                <button className="btn btn-krishi-primary btn-lg flex-grow-1 py-3" onClick={handleAddToCart}>
                  <i className="bi bi-cart-plus-fill me-2"></i>Add to Cart
                </button>
                <button
                  className={`btn btn-outline-danger btn-lg rounded-circle px-3 ${isLiked ? "active bg-danger text-white" : ""}`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <i className={`bi ${isLiked ? "bi-heart-fill" : "bi-heart"}`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications & Farmer Profile Card */}
        <div className="row g-4 mb-5">
          <div className="col-md-7">
            <div className="bg-white p-4 rounded-4 shadow-sm border h-100">
              <h5 className="fw-bold mb-3 text-dark">Crop Description & Farming Details</h5>
              <p className="text-secondary mb-4">{product.description}</p>

              <h6 className="fw-bold mb-3 text-dark">Quality Specifications</h6>
              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <tbody>
                    {Object.entries(product.specifications || {}).map(([key, val], idx) => (
                      <tr key={idx}>
                        <td className="bg-light fw-semibold text-secondary" style={{ width: "40%" }}>{key}</td>
                        <td className="fw-medium text-dark">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            {/* Farmer Card */}
            <div className="bg-white p-4 rounded-4 shadow-sm border h-100 d-flex flex-column justify-content-between">
              <div>
                <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-1 mb-2 rounded-pill">
                  PRODUCER PROFILE
                </span>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src={product.farmer.avatar}
                    alt={product.farmer.name}
                    className="rounded-circle border"
                    style={{ width: 64, height: 64, objectFit: "cover" }}
                  />
                  <div>
                    <h5 className="fw-bold text-dark mb-0">{product.farmer.name}</h5>
                    <span className="text-muted small">{product.farmer.farmName}</span>
                    <div className="d-flex align-items-center gap-1 text-warning small fw-bold mt-1">
                      <i className="bi bi-star-fill"></i>
                      <span>{product.farmer.rating} Rating ({product.farmer.reviewsCount} reviews)</span>
                    </div>
                  </div>
                </div>
                <p className="text-secondary small mb-3">
                  Located in <strong>{product.farmer.location}</strong> with over {product.farmer.experience} of organic farming experience.
                </p>
              </div>

              <div className="p-3 bg-light rounded-3 border">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="small text-muted">Verification Status</span>
                  <span className="badge bg-success">Verified Kisan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="bg-white p-4 rounded-4 shadow-sm border mb-5">
          <h5 className="fw-bold mb-4 text-dark">Verified Buyer Reviews</h5>
          <div className="d-flex flex-column gap-3">
            {MOCK_REVIEWS.map((rev) => (
              <div key={rev.id} className="p-3 rounded-3 bg-light border">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src={rev.userAvatar} alt={rev.userName} className="rounded-circle" style={{ width: 36, height: 36, objectFit: "cover" }} />
                    <div>
                      <h6 className="fw-bold text-dark mb-0" style={{ fontSize: "14px" }}>{rev.userName}</h6>
                      <span className="text-muted small">{rev.location}</span>
                    </div>
                  </div>
                  <div className="text-warning fw-bold">
                    {"★".repeat(rev.rating)}
                  </div>
                </div>
                <p className="text-secondary small mb-0">{rev.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h4 className="fw-bold mb-3 text-dark">Related Crops from Farm</h4>
            <div className="row g-4">
              {relatedProducts.map((p) => (
                <div key={p.id} className="col-md-4">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;