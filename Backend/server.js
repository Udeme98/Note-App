import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import noteRoutes from "./routes/noteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*", // later you can restrict this
    credentials: true,
  })
);
app.use(express.json());

//route middlewares
app.use("/api/notes", noteRoutes);
app.use("/api/auth", authRoutes);

connectDB();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
