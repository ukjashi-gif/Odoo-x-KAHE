const features = [
  ["Smart Itinerary", "Generate day-wise travel plans from dates, destinations, budget, and interests."],
  ["Budget Planning", "Track estimated costs for stays, food, transport, and activities."],
  ["AI Copilot", "Ask for packing tips, local etiquette, restaurant ideas, and travel advice."]
];

export default function Features() {
  return (
    <section className="section" id="features">
      <p className="section-tag">Features</p>
      <h2>Built for real travel planning</h2>
      <div className="feature-grid">
        {features.map(([title, text]) => (
          <article className="feature-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
