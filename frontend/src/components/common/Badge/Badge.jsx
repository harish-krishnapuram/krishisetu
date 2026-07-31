function Badge({ text, color = "success" }) {
  return (
    <span className={`badge bg-${color}`}>
      {text}
    </span>
  );
}

export default Badge;