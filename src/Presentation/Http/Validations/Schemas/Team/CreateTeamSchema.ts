/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';
import {Regexs} from "../../Regexs";

export const CreateTeamSchema: Schema = Joi.object().keys({
    name: Joi.string().required().min(3),
    photo: Joi.string().pattern( new RegExp(Regexs.PHOTO_URL_VALID)).optional()
});
