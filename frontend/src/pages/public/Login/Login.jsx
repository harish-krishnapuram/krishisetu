import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";
import Logo from "../../../components/layout/Logo/Logo";
import WatermarkBg from "../../../components/common/WatermarkBg/WatermarkBg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("buyer");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpCode, setOtpCode] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email && !showOtpField) {
      toast.error("Please enter your registered email or phone.");
      return;
    }

    login(email || "user@krishisetu.com", password || "password123", selectedRole);
    toast.success(`Welcome back! Logged in as ${selectedRole.toUpperCase()}.`);

    if (selectedRole === "farmer") navigate("/farmer/dashboard");
    else if (selectedRole === "admin") navigate("/admin/dashboard");
    else navigate("/buyer/dashboard");
  };

  const handleDemoPreset = (role) => {
    setSelectedRole(role);
    if (role === "farmer") {
      setEmail("ramesh.patel@krishisetu.com");
      setPassword("farmer123");
    } else if (role === "admin") {
      setEmail("admin@krishisetu.com");
      setPassword("admin123");
    } else {
      setEmail("buyer@krishisetu.com");
      setPassword("buyer123");
    }
  };

  return (
    <WatermarkBg className="min-vh-100 bg-app py-5 d-flex align-items-center justify-content-center">
      <div className="container" style={{ maxWidth: 580 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ks-glass-card bg-white p-4 p-md-5 rounded-4 shadow-lg border"
        >
          {/* Logo Header */}
          <div className="text-center mb-4">
            <div className="d-flex justify-content-center mb-2">
              <Logo />
            </div>
            <h3 className="fw-bold mb-1 text-dark">Member Login</h3>
            <p className="text-muted small fs-6">Direct Farm-to-Consumer Agricultural Portal</p>
          </div>

          {/* Quick Preset Selector */}
          <div className="bg-light p-2 rounded-pill d-flex align-items-center mb-4 border">
            <button
              type="button"
              className={`btn btn-sm flex-fill rounded-pill py-2.5 fs-6 fw-bold transition-fast ${
                selectedRole === "buyer" ? "btn-success text-white shadow-sm" : "btn-light text-secondary"
              }`}
              onClick={() => handleDemoPreset("buyer")}
            >
              🛒 Buyer
            </button>
            <button
              type="button"
              className={`btn btn-sm flex-fill rounded-pill py-2.5 fs-6 fw-bold transition-fast ${
                selectedRole === "farmer" ? "btn-success text-white shadow-sm" : "btn-light text-secondary"
              }`}
              onClick={() => handleDemoPreset("farmer")}
            >
              🌾 Farmer
            </button>
            <button
              type="button"
              className={`btn btn-sm flex-fill rounded-pill py-2.5 fs-6 fw-bold transition-fast ${
                selectedRole === "admin" ? "btn-success text-white shadow-sm" : "btn-light text-secondary"
              }`}
              onClick={() => handleDemoPreset("admin")}
            >
              🛡️ Admin
            </button>
          </div>

          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label className="form-label small fw-semibold text-secondary">
                Email Address / Mobile Number
              </label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <i className="bi bi-envelope-at-fill fs-5"></i>
                </span>
                <input
                  type="email"
                  className="form-control border-start-0 ps-0"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label small fw-semibold text-secondary mb-0">
                  Password
                </label>
                <button
                  type="button"
                  className="btn btn-link p-0 text-success small text-decoration-none fw-bold"
                  onClick={() => setShowOtpField(!showOtpField)}
                >
                  {showOtpField ? "Use Password" : "Login via OTP"}
                </button>
              </div>

              {!showOtpField ? (
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0 text-muted">
                    <i className="bi bi-lock-fill fs-5"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control border-start-0 ps-0"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              ) : (
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control rounded-start-3"
                    placeholder="Enter 6-digit OTP"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => toast.info("📲 OTP sent to registered phone number!")}
                  >
                    Send OTP
                  </button>
                </div>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="remember" defaultChecked />
                <label className="form-check-label small text-secondary" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <a href="#forgot" className="small text-success text-decoration-none fw-bold">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-krishi-primary w-100 py-3 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 fs-6"
            >
              <i className="bi bi-box-arrow-in-right fs-4"></i>
              <span>Sign In as {selectedRole.toUpperCase()}</span>
            </button>
          </form>

          {/* Footer Link */}
          <div className="mt-4 pt-3 border-top text-center">
            <span className="small text-muted">New to KrishiSetu? </span>
            <Link to="/register" className="small fw-bold text-success text-decoration-none ms-1">
              Create an Account
            </Link>
          </div>
        </motion.div>
      </div>
    </WatermarkBg>
  );
}

export default Login;