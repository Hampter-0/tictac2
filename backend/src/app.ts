import express from "express";
import { pool, testConnection } from "./config/db";

const app = express();
app.use(express.json());

testConnection();

app.get("/api/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

const PORT = process.env["PORT"] ? Number(process.env["PORT"]) : 3000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});