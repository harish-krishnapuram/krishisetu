import { MOCK_CATEGORIES } from "../../../data/mockData";

function ManageCategories() {
  return (
    <div className="bg-white p-4 rounded-4 border shadow-sm">
      <h4 className="fw-bold mb-3 text-dark">Crop Category Governance</h4>
      <div className="row g-3">
        {MOCK_CATEGORIES.map((cat) => (
          <div key={cat.id} className="col-md-4">
            <div className="p-3 border rounded-4 bg-light d-flex align-items-center gap-3">
              <img src={cat.image} alt={cat.name} className="rounded-3" style={{ width: 54, height: 54, objectFit: "cover" }} />
              <div>
                <h6 className="fw-bold text-dark mb-0">{cat.name}</h6>
                <span className="text-muted small">{cat.itemCount} Listed Crops</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageCategories;
