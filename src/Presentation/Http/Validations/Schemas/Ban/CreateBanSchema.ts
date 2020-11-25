/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';

export const CreateBanSchema: Schema = Joi.object().keys({
    date: Joi.date().min('1-1-2000').iso().required(),
    matches: Joi.number().integer().required(),
    player_id: Joi.number().integer().min(1).required(),
});
