import bcrypt from "bcrypt";
import fs from "fs";
import { Bonuses, Salaries, Users } from "../models/index.js";

export const index = async (req, res, next) => {
  try {
    const data = await Users.find().populate({
      path: "department position salary bonus",
      select: "name _id money",
    });

    return res.json({ success: true, length: data.length, data });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await Users.findById(req.params.id).populate({
      path: "department position salary bonus",
      select: "name _id money",
    });

    if (!data) throw new Error("Position not found!");

    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const bonus = await Bonuses.findOne({
      position: req.body.position,
      department: req.body.department,
    });

    const salary = await Salaries.findOne({
      position: req.body.position,
      department: req.body.department,
    });

    const data = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      department: req.body.department,
      position: req.body.position,
      avatar: req?.file?.filename,
      province: JSON.parse(req.body.province),
      district: JSON.parse(req.body.district),
      ward: JSON.parse(req.body.ward),
      address: req.body.address,
      password: hashPassword,
      salary: salary._id,
      bonus: bonus._id,
    });

    await data.save().populate({
      path: "department position salary bonus",
      select: "name _id money",
    });

    return res.json({ success: true, data });
  } catch (error) {
    if (req?.file?.filename)
      fs.existsSync(`public/users/${req.file.filename}`) &&
        fs.unlinkSync(`public/users/${req.file.filename}`);

    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await Users.findById(req.body.id);

    if (!data) throw new Error("Position not found!");

    const bonus = await Bonuses.findOne({
      position: req.body.position,
      department: req.body.department,
    });

    const salary = await Salaries.findOne({
      position: req.body.position,
      department: req.body.department,
    });

    data.firstName = req.body.firstName;
    data.lastName = req.body.lastName;
    data.email = req.body.email;
    data.phoneNumber = req.body.phoneNumber;
    data.department = req.body.department;
    data.position = req.body.position;
    data.avatar = req?.file?.filename;
    data.province = JSON.parse(req.body.province);
    data.district = JSON.parse(req.body.district);
    data.ward = JSON.parse(req.body.ward);
    data.address = req.body.address;
    data.password = hashPassword;
    data.salary = salary._id;
    data.bonus = bonus._id;

    await data.save().populate({
      path: "department position salary bonus",
      select: "name _id money",
    });

    return res.json({ success: true, data });
  } catch (error) {
    if (req?.file?.filename)
      fs.existsSync(`public/users/${req.file.filename}`) &&
        fs.unlinkSync(`public/users/${req.file.filename}`);

    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const data = await Users.findById(req.params.id);

    if (!data) throw new Error("Position not found");

    fs.existsSync(`public/users/${data.avatar}`) &&
      fs.unlinkSync(`public/users/${data.avatar}`);

    await data.deleteOne();

    return res.json({ success: true });
  } catch (error) {
    return next(error);
  }
};
