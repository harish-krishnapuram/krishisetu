import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      navigate("/shop");
      return;
    }
    navigate(`/shop?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <form
      className="navbar-search-box d-flex align-items-center bg-white border rounded-pill overflow-hidden shadow-sm w-100"
      onSubmit={handleSubmit}
    >
      <i className="bi bi-search navbar-search-icon ps-3 text-muted"></i>

      <input
        type="text"
        className="form-control border-0 shadow-none bg-transparent px-2 py-2 small"
        placeholder="Search vegetables, fruits, dairy..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit" className="btn btn-success border-0 px-3 py-2 text-white rounded-end-pill">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}

export default SearchBox;