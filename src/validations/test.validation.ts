import joi from "joi";

export const testValidationSchema = joi.object({
  username: joi.string().required(),
});
