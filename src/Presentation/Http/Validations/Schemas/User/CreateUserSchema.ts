/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';
import {Regexs} from "../../Regexs";

export const CreateUserSchema: Schema = Joi.object().keys({
    name: Joi.string().pattern(new RegExp(Regexs.NOT_ALLOW_EMPTY_STRING)).required().min(3),
    surname: Joi.string().pattern(new RegExp(Regexs.NOT_ALLOW_EMPTY_STRING)).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: false }).required(),
    password: Joi.string().alphanum().required(),
});
