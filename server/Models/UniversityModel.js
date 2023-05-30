import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "",
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    default: "",
    trim: true,
    minlength: 3,
    unique: true,
  },
  totalStudents: {
    type: Number,
    required: true,
    default: 0,
    trim: true,
  },
  image: {
    type: String,
    required: false,
    default: "",
    trim: true,
  },
  faculties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
      required: false,
    },
  ],
});

export const UniversityModel = mongoose.model("University", UniversitySchema);
