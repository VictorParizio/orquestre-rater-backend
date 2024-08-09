import {
  findUserByEmail,
  findUserByUserName,
  createUser,
  findEmail,
} from "../repositories/user.repository";
import { comparePassword, encryptPassword } from "../utils/encrypt";
import { generateToken } from "../utils/jwt";
import { ApiError } from "../helpers/ApiError";

export const registerUserService = async (
  fullName: string,
  email: string,
  password: string
) => {
  const emailAlreadyExists = await findEmail(email);
  if (emailAlreadyExists) {
    throw new ApiError(409, "Usuário ou email já cadastrado.");
  }

  const userNameAlreadyExists = await findUserByUserName(fullName);
  if (userNameAlreadyExists) {
    throw new ApiError(409, "Usuário já cadastrado.");
  }

  const encryptedPassword = await encryptPassword(password);
  const newUser = await createUser({
    fullName,
    userName: fullName,
    email,
    password: encryptedPassword,
  });
  const token = generateToken({ id: newUser.id });

  return { newUser, token };
};

export const authUserService = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new ApiError(404, "Usuário não encontrado");
  }

  const validPassword = await comparePassword(password, user.password);
  if (!validPassword) {
    throw new ApiError(401, "Email ou senha invalido");
  }

  const { password: _, ...userWithoutPassword } = user;
  const token = generateToken({ id: user.id });
  return { user: userWithoutPassword, token };
};
