import * as Joi from "joi";

export const UserSchema = Joi.object().keys({
        name: Joi.string().required().min(3),
        surname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
});