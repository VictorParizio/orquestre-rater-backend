import {
  authUser,
  deleteUser,
  listUsers,
  registerUser,
  updateUser,
} from "../controllers/user.controller";
import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import {
  updateUserSchema,
  userAuthSchema,
  userRegisterSchema,
} from "../schemas/user.schema";
import { authLimiter } from "../middlewares/limiter.middleware";
import { verifyUser } from "../middlewares/verifyUser.middleware";

export const userRouter = Router();

userRouter.post("/register", validate(userRegisterSchema), registerUser);
userRouter.post("/session", authLimiter, validate(userAuthSchema), authUser);

userRouter.use(verifyUser);

userRouter.get("/", listUsers);
userRouter.put("/:id", validate(updateUserSchema), updateUser);
userRouter.delete("/:id", deleteUser);
