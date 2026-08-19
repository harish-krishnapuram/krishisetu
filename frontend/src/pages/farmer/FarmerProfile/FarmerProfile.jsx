import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

const FARMER_AVATAR_PRESETS = [
  { label: "👨‍🌾 Farmer Rameshwar", url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80" },
  { label: "👳‍♂️ Sardar Gurpreet", url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80" },
  { label: "👩‍🌾 Ananya Gowda", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" }
];

function FarmerProfile() {
  const { user, setUser } = useAuth();
  const [avatar, setAvatar] = useState(user?.avatar || FARMER_AVATAR_PRESETS[0].url);
  const [showPhotoOptions, setShowPhotoOptions] = useState(false);

  const [farmerInfo, setFarmerInfo] = useState({
    name: user?.name || "Rameshwar Patel",
    farmName: user?.farmName || "Green Harvest Organic Estate",
    phone: user?.phone || "+91 98765 12345",
    email: user?.email || "farmer@krishisetu.com",
    state: "Maharashtra",
    district: "Nashik",
    experience: "18+ Years",
    organicCertNo: "ORG-MH-2024-8891",
    bankAccount: "•••• •••• 8841",
    ifscCode: "SBIN0004521"
  });

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        toast.info("📷 New farm profile photo selected!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFarmerInfo({ ...farmerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setUser) {
      setUser({ ...user, name: farmerInfo.name, email: farmerInfo.email, phone: farmerInfo.phone, avatar });
    }
    toast.success("Farm Producer Profile & Photo updated successfully!");
  };

  return (
    <div className="farmer-profile d-flex flex-column gap-4">
      {/* Header Banner */}
      <div className="bg-white p-4 rounded-4 border shadow-sm d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative d-inline-block">
            <img
              src={avatar}
              alt="Farmer Profile"
              className="rounded-circle border border-3 border-success shadow-sm object-fit-cover"
              style={{ width: 80, height: 80 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = FARMER_AVATAR_PRESETS[0].url;
              }}
            />

            <label
              htmlFor="farmerAvatarInput"
              className="position-absolute bottom-0 end-0 bg-success text-white rounded-circle p-1.5 shadow-sm d-flex align-items-center justify-content-center"
              style={{ width: 32, height: 32, cursor: "pointer" }}
              title="Change Farm Photo"
            >
              <i className="bi bi-camera-fill fs-6"></i>
            </label>

            <input
              type="file"
              id="farmerAvatarInput"
              className="d-none"
              accept="image/*"
              onChange={handleImageFileChange}
            />
          </div>

          <div>
            <h4 className="fw-bold mb-1 text-dark">{farmerInfo.farmName}</h4>
            <span className="badge bg-success me-2">Verified Farm Producer</span>
            <span className="text-muted small">Location: {farmerInfo.district}, {farmerInfo.state}</span>
            <div className="mt-2">
              <label htmlFor="farmerAvatarInput" className="btn btn-sm btn-outline-success rounded-pill px-3 py-1 fw-bold me-2">
                <i className="bi bi-upload me-1"></i> Edit Profile Photo
              </label>
              <button
                type="button"
                className="btn btn-sm btn-light border rounded-pill px-3 py-1 text-secondary"
                onClick={() => setShowPhotoOptions(!showPhotoOptions)}
              >
                {showPhotoOptions ? "Hide Options" : "Photo Presets"}
              </button>
            </div>
          </div>
        </div>

        <button className="btn btn-krishi-primary px-4 py-2 fw-bold" onClick={handleSubmit}>
          Save Profile Changes
        </button>
      </div>

      {/* Preset Avatar Selection */}
      {showPhotoOptions && (
        <div className="p-3 bg-white rounded-4 border shadow-sm">
          <label className="form-label small fw-semibold text-secondary d-block mb-2">
            Select 1-Click Farmer Avatar Preset
          </label>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {FARMER_AVATAR_PRESETS.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                className={`btn btn-sm rounded-pill border ${avatar === preset.url ? "btn-success text-white" : "btn-light text-dark"}`}
                onClick={() => setAvatar(preset.url)}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <input
            type="url"
            className="form-control form-control-sm text-muted"
            placeholder="Or paste profile photo URL..."
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
      )}

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
            <button type="submit" className="btn btn-krishi-primary px-4 py-2.5 fw-bold">
              Update Farmer Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FarmerProfile;
