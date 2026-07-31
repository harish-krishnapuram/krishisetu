function SkeletonLoader({ type = "card", count = 4 }) {
  const items = Array.from({ length: count });

  if (type === "card") {
    return (
      <div className="row g-4">
        {items.map((_, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 rounded-4 shadow-sm p-3 placeholder-glow">
              <div className="placeholder rounded-4 w-100 mb-3" style={{ height: "180px" }}></div>
              <div className="placeholder col-4 mb-2 rounded"></div>
              <div className="placeholder col-8 mb-3 rounded"></div>
              <div className="placeholder col-6 mb-3 rounded"></div>
              <div className="placeholder col-12 rounded py-2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "table") {
    return (
      <div className="card border-0 rounded-4 shadow-sm p-4 placeholder-glow">
        {items.map((_, i) => (
          <div key={i} className="d-flex align-items-center justify-content-between py-3 border-bottom">
            <div className="placeholder col-3 rounded py-2"></div>
            <div className="placeholder col-2 rounded py-2"></div>
            <div className="placeholder col-2 rounded py-2"></div>
            <div className="placeholder col-1 rounded py-2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="placeholder-glow">
      <div className="placeholder col-12 rounded py-4"></div>
    </div>
  );
}

export default SkeletonLoader;
