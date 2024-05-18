import { Departments } from "../models/index.js";

export const index = async (req, res, next) => {
  try {
    const data = await Departments.find();

    return res.json({ success: true, length: data.length, data });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await Departments.findById(req.params.id);

    if (!data) throw new Error("Position not found!");

    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    const data = new Departments({
      name: req.body.name,
    });

    await data.save();

    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await Departments.findById(req.body.id);

    if (!data) throw new Error("Position not found!");

    data.name = req.body.name;
    data.isActive = req.body.isActive;

    await data.save();

    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const data = await Departments.findById(req.params.id);

    if (!data) throw new Error("Position not found");

    await data.deleteOne();

    return res.json({ success: true });
  } catch (error) {
    return next(error);
  }
};
