import { floatingCards } from "./heroData";

function FloatingCards() {
  return (
    <>
      {floatingCards.map((card, index) => (
        <div className={`floating-card card-${index + 1}`} key={card.id}>
          <div className="floating-icon">{card.icon}</div>

          <div>
            <h6>{card.title}</h6>

            <small>{card.subtitle}</small>
          </div>
        </div>
      ))}
    </>
  );
}

export default FloatingCards;