import express from "express";
import { departmentControllers } from "../controllers/index.js";

const departmentRouter = express.Router();

departmentRouter.get("/", departmentControllers.index);
departmentRouter.get("/:id", departmentControllers.show);
departmentRouter.post("/", departmentControllers.store);
departmentRouter.put("/", departmentControllers.update);
departmentRouter.delete("/destroy", departmentControllers.destroy);

export default departmentRouter;
