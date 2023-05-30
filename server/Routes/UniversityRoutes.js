import express from "express";
import { UniversityModel } from "../Models/UniversityModel.js";
import { upload } from "../Upload/UploadFunction.js";

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

UniversityRoute.post("/create", upload.single("image"), async (req, res) => {
  const { name, email, totalStudents } = req?.body;
  const { location } = req?.file || "";
  try {
    const findUniversity = await UniversityModel.findOne({ email });

    if (findUniversity) {
      return res.status(400).json({ message: "email already taken" });
    }

    const newUniversity = await UniversityModel.create({
      name,
      email,
      totalStudents,
      ...(location && { image: location }),
    });
    res.status(200).json({
      message: `University was created successfully`,
      newUniversity,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});

// ✅ PUT 1 University by ID

UniversityRoute.put("/update", upload.single("image"), async (req, res) => {
  const { name, email, totalStudents, _id } = req?.body;
  const { location } = req?.file || "";

  try {
    const findEmail = await UniversityModel.findOne({ email });

    if (findEmail) {
      return res.status(400).json({ message: "email already taken" });
    }

    const findUniversity = await UniversityModel.findById(_id);

    if (!findUniversity) {
      return res.status(404).json({ message: "University not found" });
    }

    const updatedUniversity = await UniversityModel.findByIdAndUpdate(_id, {
      name,
      email,
      totalStudents,
      ...(location && { image: location }),
    });
    res.status(200).json({
      message: `University was updated successfully`,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});
