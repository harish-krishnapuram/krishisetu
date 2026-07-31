import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* Discount Badge */}
      <span className="discount-badge">
        {product.discount}% OFF
      </span>

      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product Details */}
      <div className="product-content">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="farmer-name">
          🌾 {product.farmer}
        </p>

        <div className="rating">
          ⭐ {product.rating}
          <span> ({product.reviews} Reviews)</span>
        </div>

        <div className="price-box">
          <span className="new-price">
            ₹{product.price}
          </span>

          <span className="old-price">
            ₹{product.oldPrice}
          </span>
        </div>

        <div className="product-actions">
          <button className="wishlist-btn">
            ❤
          </button>

          <button className="cart-btn">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;