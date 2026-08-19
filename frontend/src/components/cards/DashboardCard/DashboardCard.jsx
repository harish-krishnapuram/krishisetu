import { motion } from "framer-motion";

function DashboardCard({ title, value, change, isPositive = true, icon = "bi-bag-check-fill", color = "success", subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-100"
    >
      <div className="card border-0 rounded-4 shadow-sm p-4 h-100 bg-white d-flex flex-column justify-content-between position-relative overflow-hidden">
        {/* Subtle icon backdrop */}
        <div
          className={`position-absolute top-0 end-0 p-3 opacity-10 text-${color}`}
          style={{ transform: "translate(10px, -10px)" }}
        >
          <i className={`bi ${icon}`} style={{ fontSize: "5rem" }}></i>
        </div>

        <div className="d-flex align-items-center justify-content-between mb-3 z-1">
          <span className="text-muted fw-semibold text-uppercase" style={{ fontSize: "12px", letterSpacing: "0.5px" }}>
            {title}
          </span>
          <div className={`rounded-circle p-2 bg-${color}-subtle text-${color} d-flex align-items-center justify-content-center`} style={{ width: 44, height: 44 }}>
            <i className={`bi ${icon} fs-5`}></i>
          </div>
        </div>

        <div className="z-1">
          <h3 className="fw-bold text-dark mb-1">{value}</h3>
          <div className="d-flex align-items-center gap-2 small">
            {change && (
              <span className={`fw-bold d-flex align-items-center gap-1 ${isPositive ? "text-success" : "text-danger"}`}>
                <i className={`bi ${isPositive ? "bi-arrow-up-right" : "bi-arrow-down-right"}`}></i>
                {change}
              </span>
            )}
            <span className="text-muted">{subtitle || "vs last month"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardCard;
