import ProductCard from "../../../components/cards/ProductCard/ProductCard";
import { MOCK_PRODUCTS } from "../../../data/mockData";

function TopProducts() {
  const topRated = [...MOCK_PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="top-products py-5 bg-app">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-4">
          <div>
            <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-1 mb-2 rounded-pill">
              ⭐ HIGHEST RATED
            </span>
            <h2 className="fw-bold mb-1 text-dark">Top Rated Farm Crops</h2>
            <p className="text-muted mb-0">Highest rated organic harvests based on verified urban buyer reviews</p>
          </div>
        </div>

        <div className="row g-4">
          {topRated.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopProducts;