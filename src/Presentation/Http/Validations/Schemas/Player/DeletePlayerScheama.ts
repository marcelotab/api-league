/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';

export const DeletePlayerSchema: Schema = Joi.object().keys({
    id: Joi.number().integer().min(1).required(),
});
