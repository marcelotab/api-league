/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';

export const CreateUserSchema: Schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    surname: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: false }).required(),
    password: Joi.string().alphanum().required(),
});
