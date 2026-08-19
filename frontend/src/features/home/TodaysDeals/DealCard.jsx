function DealCard({ deal }) {
  return (
    <div className="deal-card">

      <span className="discount-badge">
        {deal.discount} OFF
      </span>

      <div className="deal-image">
        {deal.image}
      </div>

      <h5>{deal.name}</h5>

      <div className="deal-price">

        <span className="new-price">
          ₹{deal.price}
        </span>

        <span className="old-price">
          ₹{deal.oldPrice}
        </span>

      </div>

      <button>
        Buy Now
      </button>

    </div>
  );
}

export default DealCard;