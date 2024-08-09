import "dotenv/config";
import fs from "fs";
import path from "path";
import { ApiError } from "../helpers/ApiError";

const privateKeyPath = process.env.PRIVATE_KEY || "";
const publicKeyPath = process.env.PUBLIC_KEY || "";

export const readKeyFromFile = (filePath: string) => {
  try {
    return fs.readFileSync(path.resolve(filePath), "utf8");
  } catch (err) {
    throw new ApiError(500, `Erro ao ler a chave do arquivo: ${filePath}`);
  }
};

export const privateKey = readKeyFromFile(privateKeyPath);
export const publicKey = readKeyFromFile(publicKeyPath);
