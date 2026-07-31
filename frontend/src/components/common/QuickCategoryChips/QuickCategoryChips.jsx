import { useNavigate, useSearchParams } from "react-router-dom";
import { MOCK_CATEGORIES } from "../../../data/mockData";

function QuickCategoryChips() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const handleSelect = (categoryName) => {
    if (categoryName === "all") {
      navigate("/shop");
    } else {
      navigate(`/shop?category=${encodeURIComponent(categoryName)}`);
    }
  };

  return (
    <div className="bg-white border-bottom py-2 px-3 shadow-sm">
      <div className="container">
        <div className="d-flex align-items-center gap-2 overflow-x-auto no-scrollbar py-1" style={{ whiteSpace: "nowrap" }}>
          <span className="fw-bold text-dark small me-2 text-uppercase d-none d-md-inline" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
            🌾 Quick Harvests:
          </span>

          <button
            className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold transition-fast ${
              activeCategory === "all" ? "btn-success text-white shadow-sm" : "btn-light text-secondary border"
            }`}
            onClick={() => handleSelect("all")}
          >
            🌟 All Marketplace
          </button>

          {MOCK_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.id}
                className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold transition-fast ${
                  isActive ? "btn-success text-white shadow-sm" : "btn-light text-secondary border"
                }`}
                onClick={() => handleSelect(cat.name)}
              >
                <i className={`bi ${cat.icon || "bi-tag"} me-1`}></i>
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuickCategoryChips;
