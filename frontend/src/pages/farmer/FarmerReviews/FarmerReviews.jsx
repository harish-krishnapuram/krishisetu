import { useState } from "react";
import { MOCK_REVIEWS } from "../../../data/mockData";
import { toast } from "react-toastify";

function FarmerReviews() {
  const [reviews, setReviews] = useState(MOCK_REVIEWS);
  const [replyText, setReplyText] = useState({});

  const handleReply = (reviewId) => {
    if (!replyText[reviewId]?.trim()) {
      toast.warning("Please type a response before replying.");
      return;
    }
    toast.success("Response sent to customer successfully!");
    setReplyText((prev) => ({ ...prev, [reviewId]: "" }));
  };

  return (
    <div className="farmer-reviews d-flex flex-column gap-4">
      {/* Header */}
      <div className="bg-white p-4 rounded-4 border shadow-sm d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div>
          <h4 className="fw-bold mb-1 text-dark">Customer Reviews & Feedback</h4>
          <p className="text-muted small mb-0">See what buyers are saying about your harvest & farm products</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="text-end">
            <span className="fs-4 fw-bold text-success">4.9 / 5.0</span>
            <span className="text-muted small d-block">Overall Farm Rating</span>
          </div>
          <div className="fs-1 text-warning">⭐</div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="d-flex flex-column gap-3">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-white p-4 rounded-4 border shadow-sm">
            <div className="d-flex align-items-start justify-content-between mb-3">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={rev.userAvatar}
                  alt={rev.userName}
                  className="rounded-circle border"
                  style={{ width: 48, height: 48, objectFit: "cover" }}
                />
                <div>
                  <h6 className="fw-bold mb-0 text-dark">{rev.userName}</h6>
                  <span className="text-muted small">{rev.location} • Product: <strong className="text-success">{rev.productName}</strong></span>
                </div>
              </div>
              <div className="text-end">
                <div className="text-warning mb-1">
                  {"⭐".repeat(rev.rating)}
                </div>
                <span className="text-muted small">{rev.date}</span>
              </div>
            </div>

            <p className="text-secondary mb-3 bg-light p-3 rounded-3 fst-italic">
              "{rev.comment}"
            </p>

            {/* Farmer Reply Box */}
            <div className="border-top pt-3">
              <label className="form-label small fw-semibold text-muted">Respond to Customer</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Thank the customer or address feedback..."
                  value={replyText[rev.id] || ""}
                  onChange={(e) => setReplyText({ ...replyText, [rev.id]: e.target.value })}
                />
                <button
                  className="btn btn-krishi-primary btn-sm px-3"
                  onClick={() => handleReply(rev.id)}
                >
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FarmerReviews;
