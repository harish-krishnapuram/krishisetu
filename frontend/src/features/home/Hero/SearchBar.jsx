import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      navigate("/shop");
      return;
    }
    navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="hero-search-bar bg-white p-1.5 rounded-pill shadow-sm border d-flex align-items-center w-100"
      style={{ maxWidth: 540 }}
    >
      <div className="ps-3 pe-2 text-muted">
        <i className="bi bi-search fs-5 text-success"></i>
      </div>

      <input
        type="text"
        className="form-control border-0 shadow-none bg-transparent py-2 fs-6 text-dark"
        placeholder="Search fresh vegetables, fruits, A2 milk, grains..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        type="submit"
        className="btn btn-krishi-primary rounded-pill px-4 py-2 fw-bold text-nowrap"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;