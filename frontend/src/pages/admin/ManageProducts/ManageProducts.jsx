import { MOCK_PRODUCTS } from "../../../data/mockData";

function ManageProducts() {
  return (
    <div className="bg-white p-4 rounded-4 border shadow-sm">
      <h4 className="fw-bold mb-3 text-dark">Platform Crop Catalog Controls</h4>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Crop Name</th>
              <th>Category</th>
              <th>Farmer Producer</th>
              <th>Price</th>
              <th>Stock Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_PRODUCTS.map((p) => (
              <tr key={p.id}>
                <td className="fw-bold text-dark">{p.name}</td>
                <td><span className="badge bg-light text-dark border">{p.category}</span></td>
                <td>{p.farmer.name}</td>
                <td className="fw-bold text-success">₹{p.price} / {p.unit}</td>
                <td><span className="badge bg-success">{p.stock} units</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageProducts;
