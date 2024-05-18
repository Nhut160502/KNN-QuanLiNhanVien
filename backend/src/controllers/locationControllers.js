import { Districts, Provinces, Wards } from "../models/index.js";

export const getProvinces = async (req, res, next) => {
  try {
    const data = await Provinces.find();

    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
};

export const getDistricts = async (req, res, next) => {
  try {
    const data = await Districts.find({ parent_code: req.params.code });
    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
};

export const getWards = async (req, res, next) => {
  try {
    const data = await Wards.find({ parent_code: req.params.code });
    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
};
