export async function askCopilot(req, res) {
  const { message, trip } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  // Connect OpenAI, Anthropic, or another AI SDK here. Keep API keys on the backend.
  const destination = trip?.destinations?.[0] || "your destination";
  const reply = `For ${destination}, plan around your ${trip?.budgetTier || "moderate"} budget, keep one flexible block each day, and book popular activities early. You asked: ${message}`;

  res.json({ reply });
}
