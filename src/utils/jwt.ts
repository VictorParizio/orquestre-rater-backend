import "dotenv/config";
import jwt from "jsonwebtoken";
import { ApiError } from "../helpers/ApiError";
import { privateKey, publicKey } from "../config/key";

export const generateToken = (payload: object) => {
  if (!privateKey) {
    throw new ApiError(404, "A chave privada não está definida");
  }

  return jwt.sign(payload, privateKey, {
    expiresIn: process.env.JWT_EXPIRATION,
    algorithm: "RS256",
  });
};

export const verifyToken = (token: string) => {
  if (!publicKey) {
    throw new ApiError(404, "A chave pública não está definida");
  }

  return jwt.verify(token, publicKey, { algorithms: ["RS256"] });
};
