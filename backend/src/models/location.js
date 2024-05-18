import mongoose from "mongoose";

const Schema = mongoose.Schema;

const provinces = new Schema({
  name: { type: String },
  slug: { type: String },
  type: { type: String },
  name_with_type: { type: String },
  code: { type: String },
  isDeleted: { type: Boolean },
});

const districts = new Schema({
  name: { type: String },
  type: { type: String },
  slug: { type: String },
  name_with_type: { type: String },
  path: { type: String },
  path_with_type: { type: String },
  code: { type: String },
  parent_code: { type: String },
  isDeleted: { type: Boolean },
});

const wards = new Schema({
  name: { type: String },
  type: { type: String },
  slug: { type: String },
  name_with_type: { type: String },
  path: { type: String },
  path_with_type: { type: String },
  code: { type: String },
  parent_code: { type: String },
  isDeleted: { type: Boolean },
});

export const Provinces = mongoose.model("provinces", provinces);
export const Districts = mongoose.model("districts", districts);
export const Wards = mongoose.model("wards", wards);
