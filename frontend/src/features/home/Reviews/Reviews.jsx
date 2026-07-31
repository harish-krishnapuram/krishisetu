import ReviewCard from "../../../components/cards/ReviewCard/ReviewCard";
import { MOCK_REVIEWS } from "../../../data/mockData";

function Reviews() {
  return (
    <section className="reviews py-5 bg-app">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-1 mb-2 rounded-pill">
            BUYER FEEDBACK
          </span>
          <h2 className="fw-bold text-dark">What Our Consumers Say</h2>
          <p className="text-muted">Real experiences from families ordering fresh crops directly from Indian farmers</p>
        </div>

        <div className="row g-4">
          {MOCK_REVIEWS.map((rev) => (
            <div key={rev.id} className="col-12 col-md-4">
              <ReviewCard
                review={{
                  id: rev.id,
                  name: rev.userName,
                  avatar: rev.userAvatar,
                  rating: rev.rating,
                  comment: rev.comment,
                  location: rev.location
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;