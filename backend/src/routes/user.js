import express from "express";
import { userControllers } from "../controllers/index.js";
import { upload } from "../configs/multer.js";

const userRouter = express.Router();

userRouter.get("/", userControllers.index);
userRouter.get("/:id", userControllers.show);
userRouter.post("/", upload("/users").single("file"), userControllers.store);
userRouter.put("/", upload("/users").single("file"), userControllers.update);
userRouter.delete("/destroy", userControllers.destroy);

export default userRouter;
