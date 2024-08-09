import Joi from "joi";

export const userSchema = Joi.object({
  fullName: Joi.string().trim().min(3).max(50).required().messages({
    "any.required": "O campo Nome Completo é obrigatório.",
    "string.empty": "O campo Nome Completo não pode estar vazio.",
    "string.min": "Nome completo deve conter ao menos 3 caracteres.",
    "string.max": "Nome completo não deve ultrapassas 50 caracteres",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "O campo Email é obrigatório.",
    "string.empty": "O campo Email não pode estar vazio",
    "string.email": "O Email deve ser um endereço válido",
  }),
  password: Joi.string().trim().min(6).required().messages({
    "any.required": "O campo Senha é obrigatório.",
    "string.empty": "O campo Senha não pode estar vazio",
    "string.min": "A Senha deve conter ao menos 6 caracteres",
  }),
});

