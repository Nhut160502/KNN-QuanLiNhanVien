import mongoose from "mongoose";

const departments = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, lowercase: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Departments = mongoose.model("departments", departments);
