import { useState } from "react";
import { toast } from "react-toastify";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("🌱 Thank you for subscribing to KrishiSetu Harvest Updates!");
    setEmail("");
  };

  return (
    <section className="newsletter py-5 bg-white">
      <div className="container">
        <div className="p-5 rounded-4 bg-success text-white text-center shadow-lg position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #388E3C 100%)" }}>
          <div className="position-relative z-2 max-w-lg mx-auto" style={{ maxWidth: 600 }}>
            <span className="badge bg-warning text-dark fw-bold px-3 py-1 mb-3 rounded-pill">
              🌾 STAY INFORMED
            </span>
            <h2 className="fw-bold text-white mb-2">Subscribe to Seasonal Harvest Alerts</h2>
            <p className="text-white-50 mb-4">
              Get notified when fresh seasonal crops like Alphonso Mangoes, Kashmir Saffron, and Organic Wheat are harvested in your region.
            </p>

            <form onSubmit={handleSubscribe} className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
              <input
                type="email"
                className="form-control form-control-lg rounded-pill px-4"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-krishi-accent btn-lg rounded-pill px-4 text-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;