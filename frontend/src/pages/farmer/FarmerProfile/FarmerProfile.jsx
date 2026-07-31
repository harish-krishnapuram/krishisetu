import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

function FarmerProfile() {
  const { user } = useAuth();
  const [farmerInfo, setFarmerInfo] = useState({
    name: user?.name || "Rameshwar Patel",
    farmName: "Green Harvest Organic Estate",
    phone: "+91 98765 12345",
    email: user?.email || "farmer@krishisetu.com",
    state: "Maharashtra",
    district: "Nashik",
    experience: "18+ Years",
    organicCertNo: "ORG-MH-2024-8891",
    bankAccount: "•••• •••• 8841",
    ifscCode: "SBIN0004521"
  });

  const handleChange = (e) => {
    setFarmerInfo({ ...farmerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Farm Producer Profile updated successfully!");
  };

  return (
    <div className="farmer-profile d-flex flex-column gap-4">
      {/* Header Banner */}
      <div className="bg-white p-4 rounded-4 border shadow-sm d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src={user?.avatar || "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80"}
            alt="Farmer Profile"
            className="rounded-circle border"
            style={{ width: 64, height: 64, objectFit: "cover" }}
          />
          <div>
            <h4 className="fw-bold mb-1 text-dark">{farmerInfo.farmName}</h4>
            <span className="badge bg-success me-2">Verified Farm Producer</span>
            <span className="text-muted small">Location: {farmerInfo.district}, {farmerInfo.state}</span>
          </div>
        </div>
        <button className="btn btn-krishi-primary px-4" onClick={handleSubmit}>
          Save Profile Changes
        </button>
      </div>

      {/* Profile Form */}
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <form onSubmit={handleSubmit} className="row g-3">
          <h5 className="fw-bold text-dark border-bottom pb-2 mb-3">Farm & Personal Details</h5>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Farmer Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={farmerInfo.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Registered Farm Name</label>
            <input
              type="text"
              name="farmName"
              className="form-control"
              value={farmerInfo.farmName}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Mobile Number</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={farmerInfo.phone}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={farmerInfo.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">District</label>
            <input
              type="text"
              name="district"
              className="form-control"
              value={farmerInfo.district}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">State</label>
            <input
              type="text"
              name="state"
              className="form-control"
              value={farmerInfo.state}
              onChange={handleChange}
            />
          </div>

          <h5 className="fw-bold text-dark border-bottom pb-2 mt-4 mb-3">Organic Certification & Payout Info</h5>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Organic Certification ID</label>
            <input
              type="text"
              name="organicCertNo"
              className="form-control"
              value={farmerInfo.organicCertNo}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Farming Experience</label>
            <input
              type="text"
              name="experience"
              className="form-control"
              value={farmerInfo.experience}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Bank Account Number (For Direct Payouts)</label>
            <input
              type="text"
              name="bankAccount"
              className="form-control"
              value={farmerInfo.bankAccount}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Bank IFSC Code</label>
            <input
              type="text"
              name="ifscCode"
              className="form-control"
              value={farmerInfo.ifscCode}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-krishi-primary px-4 py-2">
              Update Farmer Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FarmerProfile;
