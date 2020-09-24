/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';

export const LoginSchema: Schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(4).max(30).required(),
});
