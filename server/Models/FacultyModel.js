import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "",
    trim: true,
    minlength: 3,
  },
});

export const FacultyModel = mongoose.model("Faculty", FacultySchema);
