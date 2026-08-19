function FarmerCard({ farmer }) {
  return (
    <div className="farmer-card">
      <div className="farmer-avatar">
        {farmer.image}
      </div>

      <h4>{farmer.name}</h4>

      <p>{farmer.location}</p>

      <div className="farmer-rating">
        ⭐ {farmer.rating}
      </div>

      <small>{farmer.products} Products</small>

      <button className="visit-store-btn">
        Visit Store
      </button>
    </div>
  );
}

export default FarmerCard;