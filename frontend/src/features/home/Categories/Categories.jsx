import { Link } from "react-router-dom";
import CategoryCard from "../../../components/cards/CategoryCard/CategoryCard";
import { MOCK_CATEGORIES } from "../../../data/mockData";

function Categories() {
  return (
    <section className="categories-section py-5 bg-app">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-4 gap-2">
          <div>
            <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-1 mb-2 rounded-pill">
              FARM PRODUCE CATEGORIES
            </span>
            <h2 className="fw-bold mb-1 text-dark">Explore Harvest Categories</h2>
            <p className="text-muted mb-0">Discover fresh produce direct from specialized regional farm estates</p>
          </div>
          <Link to="/shop" className="btn btn-krishi-outline btn-sm rounded-pill px-3 align-self-start align-self-md-auto">
            View All Marketplace &rarr;
          </Link>
        </div>

        <div className="row g-4">
          {MOCK_CATEGORIES.map((cat) => (
            <div key={cat.id} className="col-12 col-sm-6 col-md-4 col-lg-2">
              <CategoryCard
                category={{
                  id: cat.id,
                  name: cat.name,
                  image: cat.image,
                  icon: cat.icon || "bi-tree-fill",
                  itemCount: cat.itemCount || 18
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;