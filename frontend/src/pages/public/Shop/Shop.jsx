import { useState, useMemo } from "react";
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from "../../../data/mockData";
import ProductCard from "../../../components/cards/ProductCard/ProductCard";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [organicOnly, setOrganicOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      if (selectedCategory !== "all" && product.categoryId !== selectedCategory) {
        return false;
      }
      if (organicOnly && !product.isOrganic) {
        return false;
      }
      if (product.price > maxPrice) {
        return false;
      }
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.farmer.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchQuery, organicOnly, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setOrganicOnly(false);
    setMaxPrice(1500);
    setSortBy("default");
  };

  return (
    <div className="shop-page py-5 bg-app">
      <div className="container">
        {/* Banner */}
        <div className="p-4 rounded-4 bg-success text-white shadow-sm mb-4" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)" }}>
          <h2 className="fw-bold mb-1 text-white">KrishiSetu Marketplace</h2>
          <p className="mb-0 text-white-50">Browse farm-fresh organic crops, grains, fruits, and dairy direct from verified Indian farmers.</p>
        </div>

        <div className="row g-4">
          {/* Sidebar Filter Panel */}
          <div className="col-lg-3">
            <div className="bg-white p-4 rounded-4 shadow-sm border sticky-top" style={{ top: 90 }}>
              <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                <h5 className="fw-bold mb-0 text-dark">Filter Crops</h5>
                <button className="btn btn-link btn-sm p-0 text-success fw-semibold text-decoration-none" onClick={resetFilters}>
                  Reset All
                </button>
              </div>

              {/* Search */}
              <div className="mb-4">
                <label className="form-label small fw-semibold text-secondary">Search Crops or Farmers</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0"><i className="bi bi-search text-muted"></i></span>
                  <input
                    type="text"
                    className="form-control bg-light border-start-0"
                    placeholder="e.g. Mango, Rameshwar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-4">
                <label className="form-label small fw-semibold text-secondary d-block mb-2">Crop Categories</label>
                <div className="d-flex flex-column gap-2">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="category"
                      id="cat-all"
                      checked={selectedCategory === "all"}
                      onChange={() => setSelectedCategory("all")}
                    />
                    <label className="form-check-label small text-dark fw-medium" htmlFor="cat-all">All Categories</label>
                  </div>
                  {MOCK_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="category"
                        id={cat.id}
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                      />
                      <label className="form-check-label small text-dark" htmlFor={cat.id}>
                        {cat.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organic Filter Checkbox */}
              <div className="mb-4">
                <label className="form-label small fw-semibold text-secondary d-block mb-2">Farming Method</label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="organicSwitch"
                    checked={organicOnly}
                    onChange={(e) => setOrganicOnly(e.target.checked)}
                  />
                  <label className="form-check-label small fw-semibold text-success" htmlFor="organicSwitch">
                    🌱 100% Organic Only
                  </label>
                </div>
              </div>

              {/* Max Price Slider */}
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <label className="form-label small fw-semibold text-secondary">Max Price</label>
                  <span className="fw-bold text-success small">₹{maxPrice}</span>
                </div>
                <input
                  type="range"
                  className="form-range"
                  min="30"
                  max="1500"
                  step="20"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="col-lg-9">
            {/* Top Toolbar */}
            <div className="bg-white p-3 rounded-4 shadow-sm border mb-4 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
              <span className="text-muted small">
                Showing <strong className="text-dark">{filteredProducts.length}</strong> of {MOCK_PRODUCTS.length} Crops Available
              </span>

              <div className="d-flex align-items-center gap-2">
                <span className="small text-secondary fw-semibold">Sort By:</span>
                <select
                  className="form-select form-select-sm rounded-pill border"
                  style={{ width: "180px" }}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Featured / Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-5 rounded-4 text-center border shadow-sm">
                <div className="fs-1 text-muted mb-2">🔍</div>
                <h5 className="fw-bold text-dark">No Crops Match Your Filter</h5>
                <p className="text-muted small mb-3">Try adjusting your price range or search terms to see available harvests.</p>
                <button className="btn btn-krishi-outline btn-sm rounded-pill px-4" onClick={resetFilters}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="row g-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col-12 col-md-6 col-xl-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;