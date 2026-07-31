import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { toast } from "react-toastify";

function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    shippingFee,
    grandTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode) return;
    const res = applyCoupon(couponCode);
    if (res.success) {
      toast.success(res.message);
      setCouponCode("");
    } else {
      toast.error(res.message);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <div className="p-5 bg-white rounded-4 shadow-sm border max-w-lg mx-auto" style={{ maxWidth: 500 }}>
          <div className="fs-1 text-muted mb-3">🛒</div>
          <h3 className="fw-bold text-dark mb-2">Your Cart is Empty</h3>
          <p className="text-muted mb-4">You haven't added any fresh farm crops to your cart yet.</p>
          <Link to="/shop" className="btn btn-krishi-primary btn-lg shadow-sm">
            Explore Fresh Crops
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page py-5 bg-app">
      <div className="container">
        <h2 className="fw-bold mb-4 text-dark d-flex align-items-center gap-2">
          <span>🛒 Your Shopping Cart</span>
          <span className="badge bg-success rounded-pill fs-6">{cartItems.length} Items</span>
        </h2>

        <div className="row g-4">
          {/* Cart Items List */}
          <div className="col-lg-8">
            <div className="bg-white rounded-4 shadow-sm border p-4">
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.product.id}>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="rounded-3"
                              style={{ width: 60, height: 60, objectFit: "cover" }}
                            />
                            <div>
                              <Link to={`/product/${item.product.id}`} className="fw-bold text-dark text-decoration-none">
                                {item.product.name}
                              </Link>
                              <span className="text-muted d-block small">
                                Sold by: {item.product.farmer.name}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="fw-bold text-dark">₹{item.product.price} / {item.selectedUnit}</td>
                        <td>
                          <div className="d-flex align-items-center border rounded-pill overflow-hidden bg-light" style={{ width: 110 }}>
                            <button
                              className="btn btn-sm btn-light border-0 px-2 fw-bold"
                              onClick={() => updateQuantity(item.product.id, -1)}
                            >
                              -
                            </button>
                            <span className="flex-grow-1 text-center fw-bold small">{item.quantity}</span>
                            <button
                              className="btn btn-sm btn-light border-0 px-2 fw-bold"
                              onClick={() => updateQuantity(item.product.id, 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="fw-bold text-success">₹{item.product.price * item.quantity}</td>
                        <td className="text-end">
                          <button
                            className="btn btn-sm btn-outline-danger rounded-circle border-0"
                            onClick={() => removeFromCart(item.product.id)}
                            title="Remove"
                          >
                            <i className="bi bi-trash-fill fs-5"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Order Summary & Coupon Section */}
          <div className="col-lg-4">
            <div className="bg-white rounded-4 shadow-sm border p-4 position-sticky" style={{ top: 90 }}>
              <h5 className="fw-bold mb-3 text-dark">Order Summary</h5>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="mb-4">
                <label className="form-label small fw-semibold text-secondary">Apply Promo / Kisan Coupon</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control rounded-start-pill text-uppercase"
                    placeholder="Try FARMER10 or FRESH50"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button type="submit" className="btn btn-krishi-primary rounded-end-pill px-3">
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="mt-2 d-flex align-items-center justify-content-between alert alert-success py-1 px-3 mb-0 rounded-3">
                    <span className="small fw-bold">Coupon '{appliedCoupon.code}' Active!</span>
                    <button type="button" className="btn-close btn-close-xs" onClick={removeCoupon}></button>
                  </div>
                )}
              </form>

              {/* Price Calculations */}
              <div className="d-flex flex-column gap-2 mb-3 border-bottom pb-3">
                <div className="d-flex justify-content-between text-secondary">
                  <span>Subtotal</span>
                  <span className="fw-semibold">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="d-flex justify-content-between text-success">
                    <span>Coupon Discount</span>
                    <span className="fw-semibold">- ₹{discountAmount}</span>
                  </div>
                )}
                <div className="d-flex justify-content-between text-secondary">
                  <span>Estimated Delivery Fee</span>
                  <span className="fw-semibold">
                    {shippingFee === 0 ? <span className="badge bg-success">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
              </div>

              {/* Total Price */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="fw-bold fs-5 text-dark">Grand Total</span>
                <span className="fw-bold fs-4 text-success">₹{grandTotal}</span>
              </div>

              <button
                className="btn btn-krishi-accent w-100 py-3 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                onClick={() => navigate("/checkout")}
              >
                <span>Proceed to Checkout</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
