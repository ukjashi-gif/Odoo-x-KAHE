import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../db.js";

function createToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || "dev-secret", { expiresIn: "7d" });
}

export async function signup(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: "Name, email, and password are required" });

  const passwordHash = await bcrypt.hash(password, 10);
  const result = await db.query(
    "INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email",
    [name, email, passwordHash]
  );
  const user = result.rows[0];
  res.status(201).json({ user, token: createToken(user) });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  const user = result.rows[0];
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const matches = await bcrypt.compare(password, user.password_hash || "");
  if (!matches) return res.status(401).json({ error: "Invalid credentials" });

  res.json({ user: { id: user.id, name: user.name, email: user.email }, token: createToken(user) });
}
