import { useState } from "react";
import { toast } from "react-toastify";
import WatermarkBg from "../../../components/common/WatermarkBg/WatermarkBg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "buyer",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in required fields.");
      return;
    }
    toast.success("🌱 Thank you for contacting KrishiSetu Support! We will get back to you within 2 hours.");
    setFormData({ name: "", email: "", phone: "", role: "buyer", subject: "", message: "" });
  };

  return (
    <WatermarkBg className="contact-page py-5 bg-app">
      <div className="container" style={{ maxWidth: 1000 }}>
        {/* Banner */}
        <div className="p-4 p-md-5 rounded-4 bg-success text-white shadow-sm mb-5 text-center" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #388E3C 100%)" }}>
          <span className="badge bg-warning text-dark fw-bold px-3 py-1 mb-2 rounded-pill">
            📞 24/7 KISAN & BUYER HELPLINE
          </span>
          <h1 className="display-6 fw-bold text-white mb-2">Contact KrishiSetu Support</h1>
          <p className="mb-0 text-white-50 lead mx-auto" style={{ maxWidth: 580 }}>
            Have questions about farm dispatches, bulk orders, or farmer onboarding? Reach out to our dedicated support team.
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Details Cards */}
          <div className="col-md-5">
            <div className="d-flex flex-column gap-3 h-100">
              <div className="bg-white p-4 rounded-4 shadow-sm border d-flex align-items-start gap-3">
                <div className="rounded-circle bg-success bg-opacity-10 text-success p-3 fs-4">
                  <i className="bi bi-headset"></i>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Toll-Free Kisan Helpline</h6>
                  <p className="text-secondary small mb-0">+91 1800 555 9900 (Mon-Sat, 7AM-9PM)</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-4 shadow-sm border d-flex align-items-start gap-3">
                <div className="rounded-circle bg-primary bg-opacity-10 text-primary p-3 fs-4">
                  <i className="bi bi-envelope-at"></i>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Official Support Email</h6>
                  <p className="text-secondary small mb-0">support@krishisetu.com</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-4 shadow-sm border d-flex align-items-start gap-3">
                <div className="rounded-circle bg-warning bg-opacity-10 text-warning p-3 fs-4">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Headquarters & Hubs</h6>
                  <p className="text-secondary small mb-0">
                    Nashik Agri Hub, Maharashtra - 422003<br />
                    Bandra Kurla Complex, Mumbai - 400051
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border">
              <h5 className="fw-bold text-dark mb-3">Send Us a Direct Message</h5>
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-semibold text-secondary">Full Name</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Ramesh Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold text-secondary">Email Address</label>
                  <input
                    type="email"
                    className="form-control rounded-3"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold text-secondary">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control rounded-3"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold text-secondary">Account Role</label>
                  <select
                    className="form-select rounded-3"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="buyer">Consumer / Buyer</option>
                    <option value="farmer">Farmer / Kisan Producer</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-secondary">Subject</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="e.g. Bulk Wheat Order or Onboarding Query"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-secondary">Your Message</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="4"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <div className="col-12 mt-3">
                  <button type="submit" className="btn btn-krishi-primary w-100 py-3 rounded-pill fw-bold shadow-sm">
                    Submit Message to KrishiSetu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </WatermarkBg>
  );
}

export default Contact;