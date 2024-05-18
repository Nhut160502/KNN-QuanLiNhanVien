import express from "express";
import { positionControllers } from "../controllers/index.js";

const positionRouter = express.Router();

positionRouter.get("/", positionControllers.index);
positionRouter.get("/:id", positionControllers.show);
positionRouter.post("/", positionControllers.store);
positionRouter.put("/", positionControllers.update);
positionRouter.delete("/destroy", positionControllers.destroy);

export default positionRouter;
