import mongoose from "mongoose";

const users = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true, lowercase: true },
    lastName: { type: String, required: true, trim: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phoneNumber: { type: Number, required: true, unique: true },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "departments",
      required: true,
    },
    position: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "positions",
      required: true,
    },
    avatar: { type: String, set: (v) => (v === "undefined" ? null : v) },
    province: { name: { type: String }, code: { type: String } },
    district: { name: { type: String }, code: { type: String } },
    ward: { name: { type: String }, code: { type: String } },
    address: { type: String, required: true },
    salary: { type: mongoose.Schema.Types.ObjectId, ref: "salaries" },
    bonus: { type: mongoose.Schema.Types.ObjectId, ref: "bonuses" },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      required: true,
      set: (v) => (v === "undefined" ? false : true),
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    refreshToken: { type: String, default: null },
  },
  { timestamps: true }
);

export const Users = mongoose.model("users", users);
