import "express-async-errors";
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { limiter } from "./middlewares/limiter.middleware";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(limiter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
