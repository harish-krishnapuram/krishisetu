import "./CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <div className="category-image">
        <img
          src={category.image}
          alt={category.name}
        />
      </div>

      <div className="category-content">
        <h3>{category.name}</h3>

        <p>{category.products} Products</p>

        <button className="category-btn">
          Shop Now
          <i className="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;