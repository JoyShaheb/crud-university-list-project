import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UniversityRoute } from "./Routes/UniversityRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/university", UniversityRoute);

const port = process.env.PORT || 6001;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch((err) => console.log("Connection failed", err));

app.listen(port, () => console.log(`Server is running on port: ${port}`));
