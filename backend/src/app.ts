import express from "express";
import { pool, testConnection } from "./config/db";
import cors from "cors";
import { RowDataPacket } from "mysql2";
import bcrypt from "bcrypt";


const app = express();
app.use(express.json());

app.use(cors());

testConnection();

app.get("/api/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (password === '' || email === '' || username === '' || confirmPassword === '') {
      res.status(401).json({ message: "please fill in all fields" })
      return
    }

    if (password !== confirmPassword) {
      res.status(401).json({ message: "passwords do not match" })
      return
    }

    if(!email.includes("@")){
      res.status(401).json({ message: "not a valid email :(" })
      return
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, hashedPassword]);
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err })
  }
})

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM users WHERE username = ?", [username]);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = rows[0] as any;

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    return res.json({ message: "logged in succesfully" })

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err })
  }
})

const PORT = process.env["PORT"] ? Number(process.env["PORT"]) : 3003;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});