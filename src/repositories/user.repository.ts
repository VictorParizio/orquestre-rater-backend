import { prisma } from "../config/prisma";
import { CreateUserInput } from "../types/user.types";

export const findEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
    select: { email: true },
  });
};

export const findUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      fullName: true,
      userName: true,
      email: true,
    },
  });
};

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      userName: true,
      fullName: true,
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

export const updateUserProfile = async (
  id: string,
  fullName: string,
  userName: string
) => {
  const updatedUser = await prisma.user.update({
    where: { id },
    data: {
      fullName,
      userName,
    },
  });
  return updatedUser;
};

export const listAllUsers = async () => {
  return await prisma.user.findMany();
};

export const removeUser = async (id: string) => {
  return await prisma.user.delete({ where: { id } });
};
