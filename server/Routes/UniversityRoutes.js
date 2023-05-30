import express from "express";
import dotenv from "dotenv";
import { UniversityModel } from "../Models/UniversityModel.js";

dotenv.config();

export const UniversityRoute = express.Router();

// ✅ GET All Universities

UniversityRoute.get("/get-all", async (req, res) => {
  try {
    const universities = await UniversityModel.find({});
    res.status(200).json(universities);
  } catch (err) {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});

// ✅ GET 1 University by ID

UniversityRoute.get("/get-one/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findUniversity = await UniversityModel.findById(id);
    if (!findUniversity) {
      return res.status(404).json({ message: "University not found" });
    }
    res.status(200).json(findUniversity);
  } catch (err) {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});

// ✅ DELETE 1 University by ID

UniversityRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUniversity = await UniversityModel.findByIdAndDelete(id);
    if (!deletedUniversity) {
      return res.status(404).json({ message: "University not found" });
    }
    res.status(200).json({
      message: `University was deleted successfully`,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});

// ✅ POST 1 University

UniversityRoute.post("/create", async (req, res) => {
  const { name, email, totalStudents } = req?.body;
  // const { location } = req?.files;
  try {
    const findUniversity = await UniversityModel.findOne({ email });

    if (findUniversity) {
      return res.status(400).json({ message: "email already taken" });
    }

    const newUniversity = await UniversityModel.create({
      name,
      email,
      totalStudents,
      // image: location,
    });
    res.status(200).json({
      message: `University was created successfully`,
      newUniversity,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});
