import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { MOCK_ANALYTICS } from "../../../data/mockData";

function AdminReports() {
  return (
    <div className="bg-white p-4 rounded-4 border shadow-sm d-flex flex-column gap-4">
      <div>
        <h4 className="fw-bold mb-1 text-dark">Platform Financial Reports & State Metrics</h4>
        <p className="text-muted small mb-0">National marketplace trading volume and commission breakdown</p>
      </div>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MOCK_ANALYTICS.salesChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(v) => `₹${v / 1000}k`} />
            <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, "GMV"]} />
            <Area type="monotone" dataKey="revenue" stroke="#0F172A" fill="#334155" fillOpacity={0.2} strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminReports;
