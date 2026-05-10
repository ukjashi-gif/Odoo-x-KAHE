INSERT INTO users (name, email, password_hash)
VALUES ('Demo Traveler', 'demo@traveloop.app', '$2a$10$demo')
ON CONFLICT (email) DO NOTHING;

INSERT INTO trips (name, description, start_date, end_date, destinations, activities, budget_tier, custom_budget, travelers, travel_style)
VALUES (
  'European Summer Dream',
  'A sample Traveloop itinerary.',
  '2026-06-01',
  '2026-06-07',
  ARRAY['Paris', 'Rome', 'Barcelona'],
  ARRAY['Food', 'Museums', 'Landmarks'],
  'moderate',
  150000,
  2,
  'couple'
);
