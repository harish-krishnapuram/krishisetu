import { MOCK_ORDERS } from "../../../data/mockData";
import { toast } from "react-toastify";

function FarmerOrders() {
  const handleFulfill = (id) => {
    toast.success(`📦 Marked Order ${id} as Harvested & Dispatched!`);
  };

  return (
    <div className="bg-white p-4 rounded-4 border shadow-sm">
      <h4 className="fw-bold mb-3 text-dark">Buyer Orders for Your Farm</h4>
      <div className="d-flex flex-column gap-3">
        {MOCK_ORDERS.map((ord) => (
          <div key={ord.id} className="p-3 border rounded-3 bg-light d-flex align-items-center justify-content-between">
            <div>
              <span className="fw-bold text-success d-block">{ord.id}</span>
              <span className="text-dark small d-block">Buyer: {ord.customerName} ({ord.customerPhone})</span>
              <span className="text-muted small">Address: {ord.deliveryAddress}</span>
            </div>
            <div className="text-end">
              <span className="fw-bold text-dark fs-5 d-block">₹{ord.totalAmount}</span>
              <button className="btn btn-sm btn-krishi-primary mt-1" onClick={() => handleFulfill(ord.id)}>
                Dispatch Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FarmerOrders;
