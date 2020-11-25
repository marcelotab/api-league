/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';
import { Regexs } from '../../Regexs';

export const CreateTeamSchema: Schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    photo: Joi.string().pattern(new RegExp(Regexs.PHOTO_URL_VALID)).optional(),
});
