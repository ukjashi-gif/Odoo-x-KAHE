import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import PlanningFlow from "./components/PlanningFlow.jsx";
import Dashboard from "./components/Dashboard.jsx";

export default function App() {
  const [showPlanner, setShowPlanner] = useState(false);
  const [trip, setTrip] = useState(null);

  if (trip) return <Dashboard trip={trip} onExit={() => setTrip(null)} />;

  return (
    <>
      <Navbar onStart={() => setShowPlanner(true)} />
      <Hero onStart={() => setShowPlanner(true)} />
      <Features />
      <section className="section" id="journey">
        <p className="section-tag">Journey</p>
        <h2>Plan. Refine. Travel.</h2>
        <p className="section-copy">Create a trip, select destinations, set a budget, and open your itinerary dashboard.</p>
      </section>
      {showPlanner && <PlanningFlow onClose={() => setShowPlanner(false)} onComplete={setTrip} />}
    </>
  );
}
