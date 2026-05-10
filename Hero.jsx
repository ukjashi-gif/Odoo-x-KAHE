import { useState } from "react";
import Copilot from "./Copilot.jsx";

function getDays(startDate, endDate) {
  if (!startDate || !endDate) return 1;
  return Math.max(1, Math.ceil((new Date(endDate) - new Date(startDate)) / 86400000));
}

export default function Dashboard({ trip, onExit }) {
  const days = getDays(trip.startDate, trip.endDate);
  const [dayPlans, setDayPlans] = useState(
    Array.from({ length: Math.min(days, 7) }, (_, index) => ({
      day: index + 1,
      items: ["Morning exploration", "Local lunch", "Evening landmark"]
    }))
  );

  function addActivity(day) {
    setDayPlans((plans) => plans.map((plan) => plan.day === day ? { ...plan, items: [...plan.items, "New activity"] } : plan));
  }

  return (
    <main className="dashboard">
      <aside className="sidebar">
        <button className="ghost-btn" onClick={onExit}>Back</button>
        <h1>{trip.name}</h1>
        <p>{trip.destinations?.join(" · ")}</p>
        <p>{trip.travelers || 1} traveler(s) · {trip.budgetTier || "moderate"}</p>
      </aside>
      <section className="itinerary">
        <h2>Itinerary</h2>
        <div className="day-grid">
          {dayPlans.map((plan) => (
            <article className="day-card" key={plan.day}>
              <h3>Day {plan.day}</h3>
              {plan.items.map((item, index) => <p key={`${item}-${index}`}>{item}</p>)}
              <button onClick={() => addActivity(plan.day)}>Add Activity</button>
            </article>
          ))}
        </div>
      </section>
      <Copilot trip={trip} />
    </main>
  );
}
