import { Link } from "react-router-dom";
import CategoryCard from "../../../components/cards/CategoryCard/CategoryCard";
import { MOCK_CATEGORIES } from "../../../data/mockData";
import WatermarkBg from "../../../components/common/WatermarkBg/WatermarkBg";

function Categories() {
  return (
    <WatermarkBg className="categories-page py-5 bg-app">
      <div className="container">
        {/* Header Banner */}
        <div className="p-4 p-md-5 rounded-4 bg-success text-white shadow-sm mb-5" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)" }}>
          <span className="badge bg-warning text-dark fw-bold px-3 py-1 mb-2 rounded-pill">
            🌾 DIRECT FARM HARVESTS
          </span>
          <h2 className="display-6 fw-bold mb-2 text-white">Crop & Produce Categories</h2>
          <p className="mb-0 text-white-50 lead" style={{ maxWidth: 640 }}>
            Browse through our wide range of farm-fresh organic produce harvested directly by verified Indian farmers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="row g-4 mb-5">
          {MOCK_CATEGORIES.map((category) => (
            <div key={category.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="p-4 bg-white rounded-4 border shadow-sm text-center">
          <h4 className="fw-bold text-dark mb-2">Looking for Specific Seasonal Harvests?</h4>
          <p className="text-secondary mb-3">Explore our full marketplace catalog with advanced search and price filters.</p>
          <Link to="/shop" className="btn btn-krishi-primary px-4 py-2">
            Explore All Marketplace Products
          </Link>
        </div>
      </div>
    </WatermarkBg>
  );
}

export default Categories;
