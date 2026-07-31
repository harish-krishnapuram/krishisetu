import { useState } from "react";
import { MOCK_PRODUCTS } from "../../../data/mockData";
import { toast } from "react-toastify";

function FarmerInventory() {
  const [items, setItems] = useState(MOCK_PRODUCTS);

  const updateStock = (id, newQty) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, stock: Math.max(0, newQty) } : item))
    );
    toast.success("Inventory quantity updated!");
  };

  return (
    <div className="bg-white p-4 rounded-4 border shadow-sm">
      <h4 className="fw-bold mb-3 text-dark">Stock Inventory Control</h4>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Crop Name</th>
              <th>Current Stock</th>
              <th>Quick Stock Adjustment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="fw-bold text-dark">{item.name}</td>
                <td><span className="fw-bold text-success fs-5">{item.stock}</span> {item.unit}</td>
                <td>
                  <div className="d-flex align-items-center gap-2" style={{ maxWidth: 160 }}>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => updateStock(item.id, item.stock - 10)}>-10</button>
                    <button className="btn btn-sm btn-outline-success" onClick={() => updateStock(item.id, item.stock + 50)}>+50</button>
                  </div>
                </td>
                <td>
                  <span className={`badge ${item.stock > 100 ? "bg-success" : "bg-warning text-dark"}`}>
                    {item.stock > 100 ? "Sufficient Stock" : "Low Stock Warning"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FarmerInventory;
