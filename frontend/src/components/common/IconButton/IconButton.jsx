import "./IconButton.css";

function IconButton({ icon, count = 0, onClick }) {
  return (
    <button className="icon-btn" onClick={onClick}>
      <i className={`bi ${icon}`}></i>

      {count > 0 && <span className="icon-badge">{count}</span>}
    </button>
  );
}

export default IconButton;