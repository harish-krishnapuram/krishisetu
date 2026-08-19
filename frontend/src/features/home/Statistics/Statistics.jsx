import "./Statistics.css";
import { MOCK_STATS } from "../../../data/mockData";

function Statistics() {
  return (
    <section
      className="statistics py-5"
      style={{
        background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
      }}
    >
      <div className="container">
        <div className="row text-center g-4">
          {MOCK_STATS.map((stat, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="stat-card p-4 h-100 rounded-4 bg-white shadow-sm">
                <div className="stat-icon mb-3">
                  <i
                    className={`bi ${stat.icon}`}
                    style={{
                      fontSize: "2.5rem",
                      color: "#2E7D32",
                    }}
                  ></i>
                </div>

                <h2
                  style={{
                    color: "#1F2937",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </h2>

                <p
                  style={{
                    color: "#6B7280",
                    marginBottom: 0,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;