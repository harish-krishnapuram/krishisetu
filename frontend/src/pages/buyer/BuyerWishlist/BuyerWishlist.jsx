import { useWishlist } from "../../../contexts/WishlistContext";
import { MOCK_PRODUCTS } from "../../../data/mockData";
import ProductCard from "../../../components/cards/ProductCard/ProductCard";

function BuyerWishlist() {
  const { wishlist } = useWishlist();
  const wishlistedProducts = MOCK_PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="buyer-wishlist d-flex flex-column gap-4">
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <h4 className="fw-bold mb-1 text-dark">My Saved Farm Crops</h4>
        <p className="text-muted small mb-0">Your bookmarked organic produce & seasonal crops</p>
      </div>

      {wishlistedProducts.length === 0 ? (
        <div className="bg-white p-5 rounded-4 text-center border shadow-sm">
          <div className="fs-1 text-muted mb-2">❤️</div>
          <h5 className="fw-bold text-dark">No Saved Items in Wishlist</h5>
          <p className="text-muted small mb-0">Explore our market and click the heart icon on any crop to save it here.</p>
        </div>
      ) : (
        <div className="row g-3">
          {wishlistedProducts.map((product) => (
            <div key={product.id} className="col-md-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BuyerWishlist;
