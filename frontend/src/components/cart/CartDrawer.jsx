import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

function CartDrawer({ isOpen, onClose }) {
  const { cartItems, updateQuantity, removeFromCart, subtotal, grandTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCheckoutClick = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      <div className="position-fixed top-0 start-0 w-100 h-100 z-5" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }} onClick={onClose}>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column z-5"
          style={{ width: "100%", maxWidth: "420px" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-light">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-cart3 fs-4 text-success"></i>
              <h5 className="fw-bold mb-0 text-dark">Your Farm Cart</h5>
              <span className="badge bg-success rounded-pill">{cartItems.length}</span>
            </div>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>

          {/* Cart Body Items */}
          <div className="flex-grow-1 overflow-y-auto p-3 d-flex flex-column gap-3">
            {cartItems.length === 0 ? (
              <div className="text-center py-5 my-auto">
                <div className="fs-1 text-muted mb-2">🛒</div>
                <h6 className="fw-bold text-dark">Your Cart is Empty</h6>
                <p className="text-muted small mb-3">Add fresh farm produce to view items here.</p>
                <button className="btn btn-krishi-primary btn-sm rounded-pill px-4" onClick={() => { onClose(); navigate("/shop"); }}>
                  Browse Farm Produce
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.product.id} className="d-flex align-items-center gap-3 p-2 border rounded-3 bg-light">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="rounded-3 object-fit-cover"
                    style={{ width: 60, height: 60 }}
                  />
                  <div className="flex-grow-1 overflow-hidden">
                    <h6 className="fw-bold text-dark mb-1 text-truncate" style={{ fontSize: "14px" }}>
                      {item.product.name}
                    </h6>
                    <span className="text-muted small d-block mb-1">
                      ₹{item.product.price} / {item.selectedUnit || item.product.unit}
                    </span>
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center border rounded-pill bg-white px-2 py-0.5">
                        <button className="btn btn-sm btn-link p-0 text-dark text-decoration-none fw-bold" onClick={() => updateQuantity(item.product.id, -1)}>-</button>
                        <span className="px-2 fw-bold small">{item.quantity}</span>
                        <button className="btn btn-sm btn-link p-0 text-dark text-decoration-none fw-bold" onClick={() => updateQuantity(item.product.id, 1)}>+</button>
                      </div>
                      <span className="fw-bold text-success small ms-auto">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-sm text-danger border-0 p-1 ms-1" onClick={() => removeFromCart(item.product.id)}>
                    <i className="bi bi-x-circle-fill fs-5"></i>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-3 border-top bg-white">
              <div className="d-flex justify-content-between text-secondary mb-1 small">
                <span>Subtotal</span>
                <span className="fw-semibold">₹{subtotal}</span>
              </div>
              <div className="d-flex justify-content-between text-dark fw-bold mb-3 fs-5">
                <span>Total Amount</span>
                <span className="text-success">₹{grandTotal}</span>
              </div>
              <div className="d-flex gap-2">
                <Link to="/cart" className="btn btn-outline-secondary btn-sm rounded-pill flex-fill py-2 text-center text-decoration-none fw-semibold" onClick={onClose}>
                  View Full Cart
                </Link>
                <button className="btn btn-krishi-primary btn-sm rounded-pill flex-fill py-2 fw-bold" onClick={handleCheckoutClick}>
                  Checkout Now &rarr;
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default CartDrawer;
