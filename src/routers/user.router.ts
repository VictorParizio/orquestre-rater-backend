import {
  authUser,
  listUsers,
  registerUser,
} from "../controllers/user.controller";
import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { userAuthSchema, userRegisterSchema } from "../schemas/user.schema";
import { authLimiter } from "../middlewares/limiter.middleware";
import { verifyUser } from "../middlewares/verifyUser.middleware";

export const userRouter = Router();

userRouter.post("/register", validate(userRegisterSchema), registerUser);
userRouter.post("/auth", authLimiter, validate(userAuthSchema), authUser);

userRouter.use(verifyUser);

userRouter.get("/", listUsers);
