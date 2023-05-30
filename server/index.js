import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { UniversityRoute } from "./Routes/UniversityRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/university", UniversityRoute);

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Unable to connect to MongoDB", err));

const PORT = process.env.PORT || 6002;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
