export default function Navbar({ onStart }) {
  return (
    <nav className="nav">
      <a className="logo" href="#top">TRAVELOOP</a>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#journey">Journey</a>
      </div>
      <button className="outline-btn" onClick={onStart}>Start Planning</button>
    </nav>
  );
}
