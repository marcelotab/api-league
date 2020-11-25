/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';
import { Regexs } from '../../Regexs';

export const UpdateTeamSchema: Schema = Joi.object().keys({
    id: Joi.number().integer().min(1).required(),
    name: Joi.string().alphanum().min(3).max(30).required(),
    photo: Joi.string().pattern(new RegExp(Regexs.PHOTO_URL_VALID)).optional(),
});
