import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Unable to connect to MongoDB", err));

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server running on port ${PORT}`));
