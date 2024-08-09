import { prisma } from "../config/prisma";
import { CreateUserInput } from "../types/user.types";

export const findEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
    select: { email: true },
  });
};

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      userName: true,
      email: true,
      password: true,
    },
  });
};

export const findUserByUserName = async (userName: string) => {
  return await prisma.user.findUnique({
    where: { userName },
    select: { userName: true },
  });
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
