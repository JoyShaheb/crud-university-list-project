import mongoose from "mongoose";

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    default: "",
  },
  totalStudents: {
    type: Number,
    default: 0,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
});

export const UniversityModel = mongoose.model("University", universitySchema);
