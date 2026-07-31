import ProductCard from "../../../components/cards/ProductCard/ProductCard";
import { MOCK_PRODUCTS } from "../../../data/mockData";

function FeaturedProducts() {
  const featured = MOCK_PRODUCTS.filter((p) => p.isFeatured);

  return (
    <section className="featured-products py-5 bg-white">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-4">
          <div>
            <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-1 mb-2 rounded-pill">
              DIRECT FROM FARM
            </span>
            <h2 className="fw-bold mb-1 text-dark">Featured Farm Produce</h2>
            <p className="text-muted mb-0">Hand-picked organic crops harvested at peak natural freshness</p>
          </div>
        </div>

        <div className="row g-4">
          {featured.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;