import { Router } from "express";
import { userRouter } from "./user.router";
import { swaggerRouter } from "./swagger.router";

export const router = Router();

router.use(swaggerRouter);
router.use("/user", userRouter);
