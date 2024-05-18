import express from "express";
import { locationControllers } from "../controllers/index.js";

const locationRouter = express.Router();

locationRouter.get("/provinces", locationControllers.getProvinces);
locationRouter.get("/districts/:code", locationControllers.getDistricts);
locationRouter.get("/wards/:code", locationControllers.getWards);

export default locationRouter;
