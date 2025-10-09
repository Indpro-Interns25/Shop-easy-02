import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "../Routes/auth.routes.js"; // ✅ include .js extension!

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend server running ✅");
});

export default app;
