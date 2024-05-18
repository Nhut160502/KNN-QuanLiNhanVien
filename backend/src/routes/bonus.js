import express from "express";
import { bonusControllers } from "../controllers/index.js";

const bonusRouter = express.Router();

bonusRouter.get("/", bonusControllers.index);
bonusRouter.get("/:id", bonusControllers.show);
bonusRouter.post("/", bonusControllers.store);
bonusRouter.put("/", bonusControllers.update);
bonusRouter.delete("/destroy", bonusControllers.destroy);

export default bonusRouter;
