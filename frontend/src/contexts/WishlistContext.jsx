import { createContext, useContext, useState, useEffect } from "react";
import { MOCK_PRODUCTS } from "../data/mockData";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("ks_wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [MOCK_PRODUCTS[0].id, MOCK_PRODUCTS[2].id];
  });

  useEffect(() => {
    localStorage.setItem("ks_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const clearWishlist = () => setWishlist([]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        toggleWishlist,
        isInWishlist,
        clearWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
