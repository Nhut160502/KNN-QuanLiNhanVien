import { Salaries } from "../models/index.js";

export const index = async (req, res, next) => {
  try {
    const data = await Salaries.find().populate({
      path: "department position",
      select: "name _id",
    });

    return res.json({ success: true, length: data.length, data });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await Salaries.findById(req.params.id).populate({
      path: "department position",
      select: "name _id",
    });

    if (!data) throw new Error("Position not found!");

    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    const data = new Salaries({
      position: req.body.position,
      department: req.body.department,
      money: req.body.money,
    });

    await data.save().populate({
      path: "department position",
      select: "name _id",
    });

    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await Salaries.findById(req.body.id);

    if (!data) throw new Error("Position not found!");

    data.position = req.body.position;
    data.department = req.body.position;
    data.money = req.body.money;

    await data.save().populate({
      path: "department position",
      select: "name _id",
    });

    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const data = await Salaries.findById(req.params.id);

    if (!data) throw new Error("Position not found");

    await data.deleteOne();

    return res.json({ success: true });
  } catch (error) {
    return next(error);
  }
};
