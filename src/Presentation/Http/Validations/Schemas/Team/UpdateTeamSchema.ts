/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';

export const UpdateTeamSchema: Schema = Joi.object().keys({
    id: Joi.number().integer().min(1).required(),
    name: Joi.string().required().min(3),
});
