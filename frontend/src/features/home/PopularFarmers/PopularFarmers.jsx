import FarmerCard from "../../../components/cards/FarmerCard/FarmerCard";
import { MOCK_FARMERS } from "../../../data/mockData";

function PopularFarmers() {
  return (
    <section className="popular-farmers py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-1 mb-2 rounded-pill">
            VERIFIED PRODUCERS
          </span>
          <h2 className="fw-bold text-dark">Meet Our Star Kisan Partners</h2>
          <p className="text-muted">Top-rated organic farmers bringing fresh harvests directly to your table</p>
        </div>

        <div className="row g-4">
          {MOCK_FARMERS.map((farmer) => (
            <div key={farmer.id} className="col-12 col-md-6 col-lg-3">
              <FarmerCard farmer={farmer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularFarmers;