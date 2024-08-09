import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifyToken } from "../utils/jwt";

type JwtPayload = {
  id: string;
};

export interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

export const verifyUser = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Acesso negado" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Acesso negado" });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded as JwtPayload;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Token inválido" });
    }
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};
