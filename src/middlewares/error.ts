import { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/ApiError";

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode
    ? error.message
    : `Erro interno do servidor, ${error}`;
  res.status(statusCode).json({ message });
};
