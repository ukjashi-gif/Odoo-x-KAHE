import { db } from "../db.js";

export async function getTrips(req, res) {
  const result = await db.query("SELECT * FROM trips ORDER BY created_at DESC");
  res.json(result.rows);
}

export async function createTrip(req, res) {
  const {
    userId = null,
    name,
    description,
    startDate,
    endDate,
    destinations = [],
    activities = [],
    budgetTier,
    customBudget,
    travelers = 1,
    style
  } = req.body;

  if (!name || !startDate || !endDate) return res.status(400).json({ error: "Trip name, start date, and end date are required" });

  const result = await db.query(
    `INSERT INTO trips
      (user_id, name, description, start_date, end_date, destinations, activities, budget_tier, custom_budget, travelers, travel_style)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
     RETURNING *`,
    [userId, name, description, startDate, endDate, destinations, activities, budgetTier, customBudget || null, travelers, style]
  );

  res.status(201).json(result.rows[0]);
}
