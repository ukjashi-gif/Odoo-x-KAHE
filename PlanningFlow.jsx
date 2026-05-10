export default function Hero({ onStart }) {
  return (
    <header className="hero" id="top">
      <div className="hero-bg" />
      <p className="hero-tag">AI Travel Planner</p>
      <h1>Traveloop</h1>
      <p className="hero-copy">Journey beyond imagination with curated destinations, budget-aware planning, and an AI travel copilot.</p>
      <button className="primary-btn" onClick={onStart}>Create Trip</button>
    </header>
  );
}
