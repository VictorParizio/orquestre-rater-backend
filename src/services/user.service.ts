import { prisma } from "../config/prisma";
import { CreateUserInput } from "../controllers/user.controller";

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};

export const createUser = async (data: CreateUserInput) => {
  const newUser = await prisma.user.create({
    data,
    select: {
      id: true,
      fullName: true,
      userName: true,
      email: true,
    },
  });
  return newUser;
};
