import {
  findUserByEmail,
  findUserByUserName,
  createUser,
} from "../repositories/user.repository";
import { encryptPassword } from "../utils/encrypt";
import { generateToken } from "../utils/jwt";
import { ApiError } from "../helpers/ApiError";

export const registerUserService = async (
  fullName: string,
  email: string,
  password: string
) => {
  const emailAlreadyExists = await findUserByEmail(email);
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
