import { useState } from "react";
import { toast } from "react-toastify";

function AdminSettings() {
  const [settings, setSettings] = useState({
    platformName: "KRISHISETU Marketplace",
    commissionRate: "3.5",
    farmerPayoutCycle: "Weekly (Every Monday)",
    supportEmail: "support@krishisetu.com",
    supportPhone: "+91 1800 555 9900",
    enableAutoVerification: false,
    enableSMSNotifications: true,
    maintenanceMode: false
  });

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setSettings({ ...settings, [e.target.name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Platform System Settings updated successfully!");
  };

  return (
    <div className="admin-settings d-flex flex-column gap-4">
      {/* Header */}
      <div className="bg-white p-4 rounded-4 border shadow-sm d-flex align-items-center justify-content-between">
        <div>
          <h4 className="fw-bold mb-1 text-dark">Platform Governance & Settings</h4>
          <p className="text-muted small mb-0">Configure marketplace commissions, payment cycles, and security controls</p>
        </div>
        <button className="btn btn-krishi-primary px-4" onClick={handleSave}>
          Save System Configuration
        </button>
      </div>

      {/* Settings Form */}
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <form onSubmit={handleSave} className="row g-4">
          <h5 className="fw-bold text-dark border-bottom pb-2 mb-2">Marketplace Commission & Financials</h5>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Marketplace Platform Commission (%)</label>
            <div className="input-group">
              <input
                type="number"
                step="0.1"
                name="commissionRate"
                className="form-control"
                value={settings.commissionRate}
                onChange={handleChange}
              />
              <span className="input-group-text">% per transaction</span>
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Farmer Payout Disbursement Schedule</label>
            <select
              name="farmerPayoutCycle"
              className="form-select"
              value={settings.farmerPayoutCycle}
              onChange={handleChange}
            >
              <option value="Daily Instant">Daily Instant (T+1)</option>
              <option value="Weekly (Every Monday)">Weekly (Every Monday)</option>
              <option value="Bi-Weekly">Bi-Weekly</option>
            </select>
          </div>

          <h5 className="fw-bold text-dark border-bottom pb-2 mt-4 mb-2">Customer & Producer Support Credentials</h5>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Official Support Email</label>
            <input
              type="email"
              name="supportEmail"
              className="form-control"
              value={settings.supportEmail}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-semibold text-secondary">Toll-Free Helpline Number</label>
            <input
              type="text"
              name="supportPhone"
              className="form-control"
              value={settings.supportPhone}
              onChange={handleChange}
            />
          </div>

          <h5 className="fw-bold text-dark border-bottom pb-2 mt-4 mb-2">System Security & Operation Switches</h5>

          <div className="col-md-6">
            <div className="form-check form-switch p-3 bg-light rounded-3">
              <input
                className="form-check-input ms-0 me-3"
                type="checkbox"
                name="enableSMSNotifications"
                id="smsSwitch"
                checked={settings.enableSMSNotifications}
                onChange={handleChange}
              />
              <label className="form-check-label fw-semibold text-dark" htmlFor="smsSwitch">
                Enable SMS Order Notifications to Farmers
              </label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-check form-switch p-3 bg-light rounded-3">
              <input
                className="form-check-input ms-0 me-3"
                type="checkbox"
                name="maintenanceMode"
                id="maintSwitch"
                checked={settings.maintenanceMode}
                onChange={handleChange}
              />
              <label className="form-check-label fw-semibold text-danger" htmlFor="maintSwitch">
                System Maintenance Mode (Restrict Checkout)
              </label>
            </div>
          </div>

          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-krishi-primary px-4 py-2">
              Save & Apply Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminSettings;
