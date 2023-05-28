import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
});

export const ImageModel = mongoose.model("ImageModel", ImageSchema);
