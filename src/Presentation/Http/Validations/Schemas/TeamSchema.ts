import * as Joi from "joi";

export const TeamSchema = Joi.object().keys({
    name: Joi.string().required().min(3),
});