import { createContext, useContext, useState, useEffect } from "react";
import { MOCK_PRODUCTS } from "../data/mockData";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Pre-seed with sample products for realistic initial state
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("ks_cart");
    return savedCart
      ? JSON.parse(savedCart)
      : [
          { product: MOCK_PRODUCTS[0], quantity: 2, selectedUnit: "kg" },
          { product: MOCK_PRODUCTS[4], quantity: 1, selectedUnit: "jar (500ml)" }
        ];
  });

  const [appliedCoupon, setAppliedCoupon] = useState(null);

  useEffect(() => {
    localStorage.setItem("ks_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, selectedUnit = null) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          product,
          quantity,
          selectedUnit: selectedUnit || product.unit
        }
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === "FARMER10" || cleanCode === "KRISHI10") {
      setAppliedCoupon({ code: cleanCode, discountPercent: 10 });
      return { success: true, message: "10% Kisan Discount Applied!" };
    }
    if (cleanCode === "FRESH50") {
      setAppliedCoupon({ code: cleanCode, discountFixed: 50 });
      return { success: true, message: "₹50 Flat Discount Applied!" };
    }
    return { success: false, message: "Invalid or Expired Coupon Code." };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  // Computations
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discountAmount = Math.round((subtotal * appliedCoupon.discountPercent) / 100);
    } else if (appliedCoupon.discountFixed) {
      discountAmount = Math.min(subtotal, appliedCoupon.discountFixed);
    }
  }

  const shippingFee = subtotal > 500 || cartItems.length === 0 ? 0 : 49;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItemCount,
        subtotal,
        discountAmount,
        shippingFee,
        grandTotal,
        appliedCoupon,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyCoupon,
        removeCoupon
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
