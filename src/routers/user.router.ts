import { Router } from "express";
import { authUser, registerUser } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import { userAuthSchema, userRegisterSchema } from "../schemas/user.schema";
import { authLimiter } from "../middlewares/limiter.middleware";

export const userRouter = Router();

userRouter.post("/register", validate(userRegisterSchema), registerUser);
userRouter.post("/auth", authLimiter, validate(userAuthSchema), authUser);
