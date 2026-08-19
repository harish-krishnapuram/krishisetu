import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";
import Logo from "../../../components/layout/Logo/Logo";
import WatermarkBg from "../../../components/common/WatermarkBg/WatermarkBg";

function Register() {
  const [role, setRole] = useState("buyer");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [farmName, setFarmName] = useState("");
  const [stateName, setStateName] = useState("Maharashtra");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      toast.error("Please complete all required fields.");
      return;
    }

    const userData = {
      name: fullName,
      email,
      phone: phone || "+91 98765 43210",
      role,
      farmName: role === "farmer" ? farmName || "Green Acres Organic Farm" : null,
      address: `${stateName}, India`
    };

    register(userData);
    toast.success(`🎉 Account created! Welcome to KrishiSetu as ${role.toUpperCase()}.`);

    if (role === "farmer") navigate("/farmer/dashboard");
    else navigate("/buyer/dashboard");
  };

  return (
    <WatermarkBg className="min-vh-100 bg-app py-5 d-flex align-items-center justify-content-center">
      <div className="container" style={{ maxWidth: 540 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ks-glass-card bg-white p-4 p-md-5 rounded-4 shadow-lg border"
        >
          {/* Logo & Heading */}
          <div className="text-center mb-4">
            <div className="d-flex justify-content-center mb-2">
              <Logo />
            </div>
            <h4 className="fw-bold mb-1 text-dark">Join KrishiSetu Ecosystem</h4>
            <p className="text-muted small">Choose your account type to get started</p>
          </div>

          {/* Role Cards */}
          <div className="row g-3 mb-4">
            <div className="col-6">
              <div
                className={`p-3 rounded-4 border text-center cursor-pointer transition-smooth ${
                  role === "buyer"
                    ? "border-success bg-success bg-opacity-10 text-success fw-bold shadow-sm"
                    : "bg-light text-muted hover-lift"
                }`}
                onClick={() => setRole("buyer")}
                style={{ cursor: "pointer" }}
              >
                <div className="rounded-circle p-2 bg-white d-inline-flex mb-2 shadow-sm">
                  <i className="bi bi-cart-check fs-3 text-success"></i>
                </div>
                <h6 className="fw-bold mb-0">Consumer / Buyer</h6>
                <span className="text-muted" style={{ fontSize: "10px" }}>Purchase Fresh Produce</span>
              </div>
            </div>

            <div className="col-6">
              <div
                className={`p-3 rounded-4 border text-center cursor-pointer transition-smooth ${
                  role === "farmer"
                    ? "border-success bg-success bg-opacity-10 text-success fw-bold shadow-sm"
                    : "bg-light text-muted hover-lift"
                }`}
                onClick={() => setRole("farmer")}
                style={{ cursor: "pointer" }}
              >
                <div className="rounded-circle p-2 bg-white d-inline-flex mb-2 shadow-sm">
                  <i className="bi bi-tree fs-3 text-success"></i>
                </div>
                <h6 className="fw-bold mb-0">Kisan / Farmer</h6>
                <span className="text-muted" style={{ fontSize: "10px" }}>Sell Direct & Harvest</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-3">
              <label className="form-label small fw-semibold text-secondary">Full Name</label>
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="e.g. Rameshwar Patel"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="row g-2 mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label small fw-semibold text-secondary">Email Address</label>
                <input
                  type="email"
                  className="form-control rounded-3"
                  placeholder="ramesh@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-semibold text-secondary">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control rounded-3"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Farmer Specific Fields */}
            {role === "farmer" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="p-3 bg-light rounded-4 border mb-3"
              >
                <div className="mb-2">
                  <label className="form-label small fw-semibold text-secondary">Farm / Estate Name</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="e.g. Green Harvest Organic Estate"
                    value={farmName}
                    onChange={(e) => setFarmName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label small fw-semibold text-secondary">Farm Location (State)</label>
                  <select
                    className="form-select rounded-3"
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                  >
                    <option>Maharashtra</option>
                    <option>Punjab</option>
                    <option>Karnataka</option>
                    <option>Haryana</option>
                    <option>Gujarat</option>
                    <option>Madhya Pradesh</option>
                    <option>Uttar Pradesh</option>
                  </select>
                </div>
              </motion.div>
            )}

            <div className="mb-4">
              <label className="form-label small fw-semibold text-secondary">Create Password</label>
              <input
                type="password"
                className="form-control rounded-3"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-krishi-primary w-100 py-3 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
            >
              <i className="bi bi-person-plus-fill fs-5"></i>
              <span>Create {role === "farmer" ? "Farmer Producer" : "Consumer"} Account</span>
            </button>
          </form>

          {/* Footer Link */}
          <div className="mt-4 pt-3 border-top text-center">
            <span className="small text-muted">Already have a KrishiSetu account? </span>
            <Link to="/login" className="small fw-bold text-success text-decoration-none ms-1">
              Sign In Here
            </Link>
          </div>
        </motion.div>
      </div>
    </WatermarkBg>
  );
}

export default Register;