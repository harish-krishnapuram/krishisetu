import { useState, useEffect, useMemo } from "react";
import { getProductsApi, getCategoriesApi } from "../../../services/apiService";
import ProductCard from "../../../components/cards/ProductCard/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [organicOnly, setOrganicOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [prodsData, catsData] = await Promise.all([
        getProductsApi(),
        getCategoriesApi()
      ]);
      setProducts(prodsData || []);
      setCategories(catsData || []);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory !== "all" && product.categoryId !== selectedCategory && product.category?.toLowerCase() !== selectedCategory) {
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
        !product.farmer?.name?.toLowerCase().includes(searchQuery.toLowerCase())
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
  }, [products, selectedCategory, searchQuery, organicOnly, maxPrice, sortBy]);

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
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="fw-bold text-dark mb-0"><i className="bi bi-funnel me-2"></i>Filter Crops</h5>
                <button className="btn btn-link btn-sm text-success p-0 text-decoration-none" onClick={resetFilters}>Reset</button>
              </div>

              {/* Search */}
              <div className="mb-4">
                <label className="form-label small fw-semibold text-secondary">Search Crops</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0"><i className="bi bi-search"></i></span>
                  <input
                    type="text"
                    className="form-control bg-light border-start-0"
                    placeholder="Search wheat, mango..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-4">
                <label className="form-label small fw-semibold text-secondary">Harvest Category</label>
                <div className="d-flex flex-column gap-1">
                  <button
                    className={`btn btn-sm text-start rounded-3 ${selectedCategory === "all" ? "btn-success text-white" : "btn-light text-dark"}`}
                    onClick={() => setSelectedCategory("all")}
                  >
                    🌱 All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`btn btn-sm text-start rounded-3 ${selectedCategory === cat.slug || selectedCategory === cat.id ? "btn-success text-white" : "btn-light text-dark"}`}
                      onClick={() => setSelectedCategory(cat.slug || cat.id)}
                    >
                      <i className={`bi ${cat.icon} me-2`}></i>{cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Organic Only */}
              <div className="form-check form-switch mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="organicCheck"
                  checked={organicOnly}
                  onChange={(e) => setOrganicOnly(e.target.checked)}
                />
                <label className="form-check-label fw-semibold text-dark small" htmlFor="organicCheck">
                  🌿 100% Organic Only
                </label>
              </div>

              {/* Price Slider */}
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-semibold text-secondary mb-1">
                  <span>Max Price:</span>
                  <span className="text-success fw-bold">₹{maxPrice}</span>
                </div>
                <input
                  type="range"
                  className="form-range"
                  min="30"
                  max="1500"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-lg-9">
            {/* Sort & Count Header */}
            <div className="bg-white p-3 rounded-4 border shadow-sm mb-4 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
              <span className="text-muted small fw-semibold">
                Showing <strong className="text-dark">{filteredProducts.length}</strong> fresh products direct from farms
              </span>
              <div className="d-flex align-items-center gap-2">
                <span className="small text-muted">Sort By:</span>
                <select className="form-select form-select-sm rounded-3" style={{ width: 170 }} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="default">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-success" role="status"></div>
                <p className="mt-2 text-muted small">Loading live harvest items from backend...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white p-5 rounded-4 text-center border shadow-sm">
                <i className="bi bi-search fs-1 text-muted d-block mb-3"></i>
                <h5 className="fw-bold text-dark">No Products Found</h5>
                <p className="text-muted small">Try relaxing your search terms or price filter.</p>
                <button className="btn btn-outline-success btn-sm rounded-pill px-4" onClick={resetFilters}>Reset All Filters</button>
              </div>
            ) : (
              <div className="row g-3">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col-sm-6 col-md-4">
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