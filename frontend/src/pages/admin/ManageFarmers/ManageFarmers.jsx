import { MOCK_FARMERS } from "../../../data/mockData";
import { toast } from "react-toastify";

function ManageFarmers() {
  return (
    <div className="bg-white p-4 rounded-4 border shadow-sm">
      <h4 className="fw-bold mb-3 text-dark">Platform Farmer Governance</h4>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Farmer Name</th>
              <th>Farm Name</th>
              <th>Location</th>
              <th>Status</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_FARMERS.map((f) => (
              <tr key={f.id}>
                <td className="fw-bold text-dark">{f.name}</td>
                <td className="text-secondary">{f.farmName}</td>
                <td className="text-muted">{f.location}</td>
                <td><span className="badge bg-success">Active Producer</span></td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-danger" onClick={() => toast.info(`Account status updated for ${f.name}`)}>
                    Suspend Account
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageFarmers;
