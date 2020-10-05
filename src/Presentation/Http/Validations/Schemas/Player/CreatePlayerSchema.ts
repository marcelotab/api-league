/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';

export const CreatePlayerSchema: Schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    surname: Joi.string().alphanum().min(3).max(30).required(),
    team_id: Joi.number().integer().optional(),
});
