/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';
import { StatusPlayer } from '../../../../../Domain/Enums/StatusPlayer';

export const CreatePlayerSchema: Schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    surname: Joi.string().alphanum().min(3).max(30).required(),
    status: Joi.string().valid(StatusPlayer.BANNED, StatusPlayer.UNBANNED).required(),
    team_id: Joi.number().integer().optional(),
});
