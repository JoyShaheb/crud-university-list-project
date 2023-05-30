import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema({
  name: { type: String, required: true, default: "", trim: true, minlength: 3 },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    default: "",
    minlength: 3,
  },
  image: {
    type: String,
    required: false,
    trim: true,
    default: "",
  },
  totalStudents: { type: Number, required: false, trim: true, default: 0 },
  faculties: String,
});

export const UniversityModel = mongoose.model("University", UniversitySchema);
