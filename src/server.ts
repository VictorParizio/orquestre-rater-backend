import "express-async-errors";
import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routers";
import { errorMiddleware } from "./middlewares/error";
import helmet from "helmet";
import { limiter } from "./middlewares/limiter.middleware";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
