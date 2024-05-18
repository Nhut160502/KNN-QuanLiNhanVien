import mongoose from "mongoose";

const bonuses = new mongoose.Schema(
  {
    position: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "positions",
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "departments",
      required: true,
    },
    money: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Bonuses = mongoose.model("bonuses", bonuses);
