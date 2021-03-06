/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, {Schema} from 'joi';

export const DeleteTeamSchema: Schema = Joi.object().keys({
    id: Joi.number().integer().min(1).required(),
});
