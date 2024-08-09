import { Request, Response } from "express";
import { ApiError } from "../helpers/ApiError";
import { CreateUserInput } from "../types/user.types";
import { registerUserService } from "../services/user.service";

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
