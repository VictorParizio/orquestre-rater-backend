import {
  AuthUserInput,
  CreateUserInput,
  UpdateUserInput,
} from "../types/user.types";
import { Request, Response } from "express";
import { ApiError } from "../helpers/ApiError";
import {
  authUserService,
  registerUserService,
  updateUserService,
} from "../services/user.service";
import { listAllUsers } from "../repositories/user.repository";

export const registerUser = async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body as CreateUserInput;

  try {
    const { newUser, token } = await registerUserService(
      fullName,
      email,
      password
    );
    return res
      .status(201)
      .json({ newUser, token, message: "Usuário criado com sucesso" });
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export const authUser = async (req: Request, res: Response) => {
  const { email, password } = req.body as AuthUserInput;
  try {
    const { user, token } = await authUserService(email, password);
    return res.status(200).json({ user, token });
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export const listUsers = async (req: Request, res: Response) => {
  const allsusers = await listAllUsers();
  return res.status(200).json(allsusers);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { fullName, userName } = req.body as UpdateUserInput;

  try {
    await updateUserService(id, fullName, userName);
    return res.status(200).json();
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};


