import { Request, Response } from "express";
import {
  createUser,
  findUserByEmail,
  findUserByUserName,
} from "../services/user.service";
import { ApiError } from "../helpers/ApiError";

export type CreateUserInput = {
  fullName: string;
  userName: string;
  email: string;
  password: string;
};

export const registerUser = async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body as CreateUserInput;
  const emailAlreadyExist = await findUserByEmail(email);

  if (emailAlreadyExist) {
    throw new ApiError(409, "Usuário ou email já cadastrado.");
  }

  const userNameAlreadyExist = await findUserByUserName(fullName);

  if (userNameAlreadyExist) {
    throw new ApiError(409, "Usuário ou email já cadastrado.");
  }

  const data = {
    fullName,
    userName: fullName,
    email,
    password,
  };
  const newUser = await createUser(data);

  return res.status(201).json({ newUser });
};
