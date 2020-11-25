/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, {Schema} from 'joi';
import {Regexs} from "../../Regexs";

export const UpdateTeamSchema: Schema = Joi.object().keys({
    id: Joi.number().integer().min(1).required(),
    name: Joi.string().pattern(new RegExp(Regexs.NOT_ALLOW_EMPTY_STRING), 'NOT_ALLOW_EMPTY_STRING').required().min(3),
    photo: Joi.string().pattern(new RegExp(Regexs.NOT_ALLOW_EMPTY_STRING)).optional()
});
