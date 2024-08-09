import { Request, Response } from "express";
import {
  createUser,
  findUserByEmail,
  findUserByUserName,
} from "../services/user.service";
import { ApiError } from "../helpers/ApiError";
import { encryptPassword } from "../utils/encrypt";
import { generateToken } from "../utils/jwt";

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

  const encryptedPassword = await encryptPassword(password);
  const data = {
    fullName,
    userName: fullName,
    email,
    password: encryptedPassword,
  };
  const newUser = await createUser(data);
  const token = generateToken({ id: newUser.id });

  return res
    .status(201)
    .json({ newUser, token, message: "Usuário criado com sucesso" });
};
