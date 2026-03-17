import cors from "cors";
import "dotenv/config";
import express from "express";
import healthRouter from "./routes/health.router.js";

const app = express();
const PORT = process.env.PORT || 3310;
const NODE_ENV = process.env.NODE_ENV || "development";
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// ── Middlewares ───────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: CLIENT_URL,
		credentials: true,
	}),
);

// ── Routes ────────────────────────────────────────────
app.use("/api/health", healthRouter);

// ── Démarrage ─────────────────────────────────────────
app.listen(PORT, () => {
	console.log("\n=========================================");
	console.log("🔵 SERVER BACKEND");
	console.log("=========================================");
	console.log(`🔵 NODE_ENV : ${NODE_ENV}`);
	console.log(`🟢 Serveur démarré sur : http://localhost:${PORT}`);
	console.log("=========================================\n");
});

export default app;
