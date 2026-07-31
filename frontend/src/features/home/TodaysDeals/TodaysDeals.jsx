import ProductCard from "../../../components/cards/ProductCard/ProductCard";
import { MOCK_PRODUCTS } from "../../../data/mockData";

function TodaysDeals() {
  const deals = MOCK_PRODUCTS.filter((p) => p.isTodayDeal);

  return (
    <section className="todays-deals py-5 bg-app">
      <div className="container">
        <div className="p-4 rounded-4 bg-danger bg-opacity-10 border border-danger border-opacity-25 mb-4">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
            <div>
              <span className="badge bg-danger text-white fw-bold px-3 py-1 mb-2 rounded-pill">
                🔥 FLASH HARVEST OFFERS
              </span>
              <h2 className="fw-bold mb-1 text-dark">Today's Kisan Deals</h2>
              <p className="text-muted mb-0">Limited quantity fresh harvest discounts ending today</p>
            </div>
            <div className="d-flex align-items-center gap-2 bg-white px-3 py-2 rounded-pill shadow-sm border">
              <i className="bi bi-clock-history text-danger fs-5"></i>
              <span className="fw-bold text-dark">Offer Ends in: <span className="text-danger">08h : 24m : 12s</span></span>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {deals.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TodaysDeals;