import { heroStats } from "./heroData";

function HeroStats() {
  return (
    <div className="hero-stats">
      {heroStats.map((item) => (
        <div className="stat-card" key={item.id}>
          <i className={`bi ${item.icon}`}></i>

          <h3>{item.value}</h3>

          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;