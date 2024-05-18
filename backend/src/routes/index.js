import express from "express";
import userRouter from "./user.js";
import positionRouter from "./position.js";
import bonusRouter from "./bonus.js";
import departmentRouter from "./department.js";
import salaryRouter from "./salary.js";
import locationRouter from "./location.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/position", positionRouter);
router.use("/bonus", bonusRouter);
router.use("/department", departmentRouter);
router.use("/salary", salaryRouter);
router.use("/location", locationRouter);

export default router;
