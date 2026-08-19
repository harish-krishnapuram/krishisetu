function BuyerNotifications() {
  const notifications = [
    { id: 1, title: "📦 Order Out for Delivery", time: "10 mins ago", text: "Your order #ORD-98241 (Farm Fresh Organic Tomatoes & Ghee) is out for delivery with KrishiSetu Express." },
    { id: 2, title: "🌾 New Harvest Alert from Rameshwar Patel", time: "2 hours ago", text: "Devgad Hapus Alphonso Mangoes have just been harvested today at Nashik Estate. Limited stock available!" },
    { id: 3, title: "🎉 Kisan Coupon Received", time: "1 day ago", text: "Use code FARMER10 to get 10% instant discount on your next organic pulse order." }
  ];

  return (
    <div className="bg-white p-4 rounded-4 border shadow-sm">
      <h4 className="fw-bold mb-3 text-dark">Notifications & Harvest Alerts</h4>
      <div className="d-flex flex-column gap-3">
        {notifications.map((n) => (
          <div key={n.id} className="p-3 rounded-3 bg-light border d-flex justify-content-between align-items-start">
            <div>
              <h6 className="fw-bold text-dark mb-1">{n.title}</h6>
              <p className="text-muted small mb-0">{n.text}</p>
            </div>
            <span className="badge bg-secondary" style={{ fontSize: "10px" }}>{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerNotifications;
