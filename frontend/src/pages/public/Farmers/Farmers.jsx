import { useState } from "react";
import FarmerCard from "../../../components/cards/FarmerCard/FarmerCard";
import { MOCK_FARMERS } from "../../../data/mockData";
import WatermarkBg from "../../../components/common/WatermarkBg/WatermarkBg";

function Farmers() {
  const [selectedState, setSelectedState] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFarmers = MOCK_FARMERS.filter((farmer) => {
    if (selectedState !== "all" && farmer.state !== selectedState) return false;
    if (
      searchQuery &&
      !farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !farmer.farmName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !farmer.location.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <WatermarkBg className="farmers-page py-5 bg-app">
      <div className="container">
        {/* Banner */}
        <div className="p-4 p-md-5 rounded-4 bg-success text-white shadow-sm mb-4" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #388E3C 100%)" }}>
          <span className="badge bg-warning text-dark fw-bold px-3 py-1 mb-2 rounded-pill">
            👨‍🌾 VERIFIED KISAN PRODUCERS
          </span>
          <h2 className="display-6 fw-bold mb-2 text-white">Meet Our Verified Kisan Partners</h2>
          <p className="mb-0 text-white-50 lead" style={{ maxWidth: 640 }}>
            Connect with organic farmers across India selling 100% genuine harvests directly with zero middleman commissions.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-3 rounded-4 shadow-sm border mb-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-2 flex-grow-1" style={{ maxWidth: 400 }}>
            <i className="bi bi-search text-muted fs-5 ps-2"></i>
            <input
              type="text"
              className="form-control border-0 bg-transparent"
              placeholder="Search farmer name, farm estate, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="d-flex align-items-center gap-2">
            <label className="small fw-semibold text-secondary text-nowrap">State Filter:</label>
            <select
              className="form-select form-select-sm rounded-pill border"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              style={{ width: 180 }}
            >
              <option value="all">All States</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Punjab">Punjab</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Haryana">Haryana</option>
            </select>
          </div>
        </div>

        {/* Farmers Grid */}
        <div className="row g-4">
          {filteredFarmers.map((farmer) => (
            <div key={farmer.id} className="col-12 col-md-6 col-lg-3">
              <FarmerCard farmer={farmer} />
            </div>
          ))}
        </div>
      </div>
    </WatermarkBg>
  );
}

export default Farmers;
