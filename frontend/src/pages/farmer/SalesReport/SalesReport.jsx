import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { MOCK_ANALYTICS } from "../../../data/mockData";

function SalesReport() {
  return (
    <div className="bg-white p-4 rounded-4 border shadow-sm d-flex flex-column gap-4">
      <div>
        <h4 className="fw-bold mb-1 text-dark">Harvest Sales & Bank Revenue Report</h4>
        <p className="text-muted small mb-0">Detailed breakdown of direct farm payouts processed via KrishiSetu</p>
      </div>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={MOCK_ANALYTICS.salesChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(v) => `₹${v / 1000}k`} />
            <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, "Revenue"]} />
            <Line type="monotone" dataKey="revenue" stroke="#1B5E20" strokeWidth={3} dot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesReport;
