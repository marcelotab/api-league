import Joi, { Schema } from 'joi';

export const CreateUserSchema: Schema = Joi.object().keys({
    name: Joi.string().required().min(3),
    surname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
