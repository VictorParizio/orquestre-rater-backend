import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Muitas solicitações, tente novamente mais tarde.",
});

export const authLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
  message: "Muitas tentativas de acesso, tente novamente mais tarde.",
});
