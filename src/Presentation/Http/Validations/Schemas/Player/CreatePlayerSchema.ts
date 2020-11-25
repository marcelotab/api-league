/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';
import { Regexs } from '../../Regexs';

export const CreatePlayerSchema: Schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    surname: Joi.string().alphanum().min(3).max(30).required(),
    team_id: Joi.number().integer().min(1).optional(),
    photo: Joi.string().pattern(new RegExp(Regexs.PHOTO_URL_VALID)).optional(),
});
