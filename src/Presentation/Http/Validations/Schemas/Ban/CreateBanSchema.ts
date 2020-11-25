/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';

export const CreateBanSchema: Schema = Joi.object().keys({
    dateFrom: Joi.date().min('1-1-2000').iso().required(),
    dateTo: Joi.date().greater(Joi.ref('dateFrom')).max('12-31-2049').iso().required(),
    player_id: Joi.number().integer().min(1).required(),
});
