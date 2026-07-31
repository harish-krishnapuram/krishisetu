import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

function BuyerProfile() {
  const { user, setUser } = useAuth();
  const [name, setName] = useState(user?.name || "Kisan Buyer");
  const [email, setEmail] = useState(user?.email || "buyer@example.com");
  const [phone, setPhone] = useState(user?.phone || "+91 98765 43210");
  const [address, setAddress] = useState(user?.address || "Flat 402, Green Acres Apt, Mumbai - 400050");

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...user, name, email, phone, address });
    toast.success("Profile details updated successfully!");
  };

  return (
    <div className="bg-white p-4 rounded-4 border shadow-sm" style={{ maxWidth: 640 }}>
      <h4 className="fw-bold mb-4 text-dark">My Profile Settings</h4>
      <form onSubmit={handleSave}>
        <div className="d-flex align-items-center gap-3 mb-4">
          <img src={user?.avatar} alt={user?.name} className="rounded-circle border" style={{ width: 72, height: 72, objectFit: "cover" }} />
          <div>
            <h5 className="fw-bold text-dark mb-0">{user?.name}</h5>
            <span className="badge bg-success text-capitalize">{user?.role} Account</span>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label small fw-semibold text-secondary">Full Name</label>
          <input type="text" className="form-control rounded-3" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="row g-2 mb-3">
          <div className="col-6">
            <label className="form-label small fw-semibold text-secondary">Email Address</label>
            <input type="email" className="form-control rounded-3" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="col-6">
            <label className="form-label small fw-semibold text-secondary">Mobile Number</label>
            <input type="tel" className="form-control rounded-3" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label small fw-semibold text-secondary">Default Shipping Address</label>
          <textarea className="form-control rounded-3" rows="3" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </div>

        <button type="submit" className="btn btn-krishi-primary px-4 py-2">
          Save Profile Changes
        </button>
      </form>
    </div>
  );
}

export default BuyerProfile;
