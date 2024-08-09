import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
import { userSchema } from "../schemas/user.schema";
import { validate } from "../middlewares/validate.middleware";

export const userRouter = Router();

userRouter.post("/register", validate(userSchema), registerUser);
