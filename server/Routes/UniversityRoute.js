import express from "express";
import { UniversityModel } from "../Model/UniversityModel.js";
import { S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";
import dotenv from "dotenv";
import { ImageModel } from "../Model/ImageModel.js";

dotenv.config();

const s3 = new S3Client({
  region: process.env.S3_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const fileName = Date.now().toString() + "_" + file.originalname;
      cb(null, fileName);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
  }),
});

export const UniversityRoute = express.Router();

// Get all universities ✅

UniversityRoute.get("/get-all", async (req, res) => {
  try {
    const allUniversities = await UniversityModel.find({});
    res.status(200).json({ universities: allUniversities });
  } catch {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});

// get 1 university ✅

UniversityRoute.get("/get-one/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const university = await UniversityModel.findById(id);
    if (!university) {
      return res.status(400).json({ message: "University not found" });
    }
    res.status(200).json({ university });
  } catch (err) {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});

// create 1 university ✅

UniversityRoute.post("/create", async (req, res) => {
  const {
    name,
    email,
    totalStudents,
    // image,
  } = req.body;

  try {
    const findUniversity = await UniversityModel.findOne({ name });
    if (findUniversity) {
      return res
        .status(400)
        .json({ message: "University name already exists" });
    }

    const uniqueEmail = await UniversityModel.findOne({ email });
    if (uniqueEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUniversity = new UniversityModel({ ...req.body });
    await newUniversity.save();

    res.status(200).json({ message: "University created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});

// update 1 university ✅

UniversityRoute.put("/update", async (req, res) => {
  const { universityID, name, email, totalStudents, image } = req.body;
  try {
    const updatedUniversity = await UniversityModel.findByIdAndUpdate(
      universityID,
      {
        name,
        email,
        totalStudents,
        image,
      }
    );
    if (!updatedUniversity) {
      return res.status(400).json({ message: "University not found" });
    }
    res.status(200).json({ message: "University updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});

// delete 1 university ✅

UniversityRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUniversity = await UniversityModel.findByIdAndDelete(id);
    if (!deletedUniversity) {
      return res.status(400).json({ message: "University not found" });
    }
    res.status(200).json({ message: "University deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error, please try again later" });
  }
});

// test here
UniversityRoute.post(
  "/test",
  upload.single("image"),
  async (req, res, next) => {
    const { name } = req?.body;

    try {
      const newImage = new ImageModel({
        name: name,
        image: req?.file?.location,
      });
      await newImage.save();

      res.status(200).json({
        message: `Successfully uploaded 1 files!`,
        URL_location: req?.file?.location,
        name: name,
      });
    } catch (err) {
      res.status(500).json({ message: "Server Error, please try again later" });
    }
  }
);
