import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import tripRoutes from "./routes/trips.routes.js";
import copilotRoutes from "./routes/copilot.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/copilot", copilotRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Traveloop API running on ${port}`));
