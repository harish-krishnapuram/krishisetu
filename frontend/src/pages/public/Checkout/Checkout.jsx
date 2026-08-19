import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

function Checkout() {
  const { cartItems, grandTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("user@okaxis");
  const [address, setAddress] = useState(
    user?.address || "Flat 402, Green Acres Apt, Bandra West, Mumbai - 400050"
  );
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!address) {
      toast.error("Please enter a valid delivery address.");
      return;
    }
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success("🎉 Order Placed Successfully! Sent directly to Farmer.");
      navigate("/buyer/orders/ORD-98241/track");
    }, 1500);
  };

  return (
    <div className="checkout-page py-5 bg-app">
      <div className="container" style={{ maxWidth: 960 }}>
        <h2 className="fw-bold mb-4 text-dark text-center">🌱 Checkout & Direct Farm Order</h2>

        <div className="row g-4">
          {/* Shipping & Payment Options */}
          <div className="col-md-7">
            <form onSubmit={handlePlaceOrder}>
              {/* Shipping Address Card */}
              <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
                <h5 className="fw-bold mb-3 text-dark d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill text-success"></i>
                  <span>1. Delivery Address</span>
                </h5>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-secondary">Full Name</label>
                  <input type="text" className="form-control rounded-3" defaultValue={user?.name || "Kisan Buyer"} required />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-secondary">Complete Shipping Address</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="3"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>

              {/* Payment Method Card */}
              <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
                <h5 className="fw-bold mb-3 text-dark d-flex align-items-center gap-2">
                  <i className="bi bi-credit-card-fill text-success"></i>
                  <span>2. Payment Option</span>
                </h5>

                <div className="d-flex flex-column gap-2 mb-3">
                  <label className={`p-3 rounded-3 border d-flex align-items-center justify-content-between cursor-pointer ${paymentMethod === "upi" ? "border-success bg-success bg-opacity-10" : ""}`}>
                    <div className="d-flex align-items-center gap-2">
                      <input type="radio" name="payment" checked={paymentMethod === "upi"} onChange={() => setPaymentMethod("upi")} />
                      <span className="fw-bold text-dark">UPI (Google Pay / PhonePe / Paytm)</span>
                    </div>
                    <span className="badge bg-success">Instant 0% Fee</span>
                  </label>

                  {paymentMethod === "upi" && (
                    <div className="ps-4 pe-2 pb-2">
                      <input
                        type="text"
                        className="form-control rounded-3"
                        placeholder="Enter UPI ID (e.g. 9876543210@upi)"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        required
                      />
                    </div>
                  )}

                  <label className={`p-3 rounded-3 border d-flex align-items-center justify-content-between cursor-pointer ${paymentMethod === "card" ? "border-success bg-success bg-opacity-10" : ""}`}>
                    <div className="d-flex align-items-center gap-2">
                      <input type="radio" name="payment" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                      <span className="fw-bold text-dark">Credit / Debit Card</span>
                    </div>
                    <i className="bi bi-credit-card fs-5 text-muted"></i>
                  </label>

                  <label className={`p-3 rounded-3 border d-flex align-items-center justify-content-between cursor-pointer ${paymentMethod === "cod" ? "border-success bg-success bg-opacity-10" : ""}`}>
                    <div className="d-flex align-items-center gap-2">
                      <input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                      <span className="fw-bold text-dark">Cash On Delivery (COD)</span>
                    </div>
                    <span className="badge bg-secondary">Pay on Farm Arrival</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-krishi-primary w-100 py-3 rounded-pill fw-bold shadow-lg fs-5"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing Farm Order..." : `Confirm & Pay ₹${grandTotal}`}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="col-md-5">
            <div className="bg-white p-4 rounded-4 shadow-sm border position-sticky" style={{ top: 90 }}>
              <h5 className="fw-bold mb-3 text-dark">Cart Items ({cartItems.length})</h5>
              <div className="d-flex flex-column gap-3 mb-4 max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img src={item.product.image} alt={item.product.name} className="rounded-3" style={{ width: 44, height: 44, objectFit: "cover" }} />
                      <div>
                        <span className="fw-bold text-dark small d-block text-truncate" style={{ maxWidth: 160 }}>{item.product.name}</span>
                        <span className="text-muted small">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="fw-bold text-success">₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-top pt-3">
                <div className="d-flex justify-content-between text-dark fw-bold fs-5">
                  <span>Total Payable</span>
                  <span className="text-success">₹{grandTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
