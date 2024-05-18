import mongoose from "mongoose";

const positions = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, lowercase: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Positions = mongoose.model("positions", positions);
