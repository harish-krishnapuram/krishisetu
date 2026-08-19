import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

const AVATAR_PRESETS = [
  { label: "👤 Default Buyer", url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80" },
  { label: "👩‍🌾 Farmer Rameshwar", url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80" },
  { label: "👨‍💼 Urban Consumer", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
  { label: "👩‍💼 Organic Buyer", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" }
];

function BuyerProfile() {
  const { user, setUser } = useAuth();
  const [name, setName] = useState(user?.name || "Kisan Buyer");
  const [email, setEmail] = useState(user?.email || "buyer@example.com");
  const [phone, setPhone] = useState(user?.phone || "+91 98765 43210");
  const [address, setAddress] = useState(user?.address || "Flat 402, Green Acres Apt, Mumbai - 400050");
  const [avatar, setAvatar] = useState(user?.avatar || AVATAR_PRESETS[0].url);
  const [showPhotoOptions, setShowPhotoOptions] = useState(false);

  // Local File Upload Handler
  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        toast.info("📷 New profile photo selected!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...user, name, email, phone, address, avatar });
    toast.success("Profile details & avatar updated successfully!");
  };

  return (
    <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm" style={{ maxWidth: 680 }}>
      <h4 className="fw-bold mb-4 text-dark">My Profile & Account Settings</h4>
      
      <form onSubmit={handleSave}>
        {/* Profile Avatar Header with Edit Trigger */}
        <div className="bg-light p-4 rounded-4 border mb-4 d-flex flex-column flex-sm-row align-items-center gap-4">
          <div className="position-relative d-inline-block">
            <img
              src={avatar}
              alt={name}
              className="rounded-circle border border-3 border-success shadow-sm object-fit-cover"
              style={{ width: 90, height: 90 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = AVATAR_PRESETS[0].url;
              }}
            />

            {/* Edit Photo Trigger Button */}
            <label
              htmlFor="avatarFileInput"
              className="position-absolute bottom-0 end-0 bg-success text-white rounded-circle p-2 shadow-sm cursor-pointer d-flex align-items-center justify-content-center"
              style={{ width: 34, height: 34, cursor: "pointer" }}
              title="Change Profile Photo"
            >
              <i className="bi bi-camera-fill fs-6"></i>
            </label>
            
            <input
              type="file"
              id="avatarFileInput"
              className="d-none"
              accept="image/*"
              onChange={handleImageFileChange}
            />
          </div>

          <div>
            <h5 className="fw-bold text-dark mb-1">{name}</h5>
            <span className="badge bg-success text-capitalize mb-2">{user?.role || "buyer"} Account</span>
            <div className="d-flex flex-wrap gap-2">
              <label htmlFor="avatarFileInput" className="btn btn-sm btn-outline-success rounded-pill px-3 py-1 fw-bold">
                <i className="bi bi-upload me-1"></i> Upload Photo
              </label>
              <button
                type="button"
                className="btn btn-sm btn-light border rounded-pill px-3 py-1 text-secondary"
                onClick={() => setShowPhotoOptions(!showPhotoOptions)}
              >
                {showPhotoOptions ? "Hide Presets" : "Choose Presets"}
              </button>
            </div>
          </div>
        </div>

        {/* Preset Photo Options */}
        {showPhotoOptions && (
          <div className="p-3 bg-light rounded-4 border mb-4">
            <label className="form-label small fw-semibold text-secondary d-block mb-2">
              Select 1-Click Profile Preset Avatar
            </label>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {AVATAR_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`btn btn-sm rounded-pill border ${avatar === preset.url ? "btn-success text-white" : "btn-white text-dark"}`}
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

        <div className="mb-3">
          <label className="form-label small fw-semibold text-secondary">Full Name</label>
          <input type="text" className="form-control rounded-3" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="row g-2 mb-3">
          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Email Address</label>
            <input type="email" className="form-control rounded-3" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Mobile Number</label>
            <input type="tel" className="form-control rounded-3" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label small fw-semibold text-secondary">Default Delivery Address</label>
          <textarea className="form-control rounded-3" rows="3" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </div>

        <button type="submit" className="btn btn-krishi-primary w-100 py-3 rounded-pill fw-bold shadow-sm">
          Save Profile Changes
        </button>
      </form>
    </div>
  );
}

export default BuyerProfile;
