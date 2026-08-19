import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="Search vegetables, fruits, grains..."
      />

      <button>
        <i className="bi bi-search"></i>
      </button>

    </div>
  );
}

export default SearchBar;