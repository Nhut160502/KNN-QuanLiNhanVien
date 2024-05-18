import express from "express";
import { salaryControllers } from "../controllers/index.js";

const salaryRouter = express.Router();

salaryRouter.get("/", salaryControllers.index);
salaryRouter.get("/:id", salaryControllers.show);
salaryRouter.post("/", salaryControllers.store);
salaryRouter.put("/", salaryControllers.update);
salaryRouter.delete("/destroy", salaryControllers.destroy);

export default salaryRouter;
