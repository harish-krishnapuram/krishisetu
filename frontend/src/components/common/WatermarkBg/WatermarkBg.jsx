import logoWatermark from "../../../assets/logos/logo.jpeg";

function WatermarkBg({ children, opacity = 0.06, className = "" }) {
  return (
    <div className={`position-relative ${className}`}>
      {/* Full Screen-Fitting Fixed Background Logo Watermark */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100 pointer-events-none user-select-none"
        style={{
          zIndex: 0,
          opacity: opacity,
          backgroundImage: `url(${logoWatermark})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          mixBlendMode: "screen",
          filter: "contrast(120%) brightness(95%)",
          pointerEvents: "none"
        }}
      ></div>

      {/* Foreground Content */}
      <div className="position-relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default WatermarkBg;
