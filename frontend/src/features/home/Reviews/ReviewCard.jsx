function ReviewCard({ review }) {
  return (
    <div className="review-card">

      <div className="review-stars">
        {"⭐".repeat(review.rating)}
      </div>

      <p className="review-text">
        "{review.review}"
      </p>

      <h5>{review.name}</h5>

      <small>{review.location}</small>

    </div>
  );
}

export default ReviewCard;