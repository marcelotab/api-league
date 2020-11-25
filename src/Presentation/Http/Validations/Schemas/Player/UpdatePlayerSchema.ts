/* eslint-disable @typescript-eslint/naming-convention*/
import Joi, { Schema } from 'joi';
import {Regexs} from "../../Regexs";

export const UpdatePlayerSchema: Schema = Joi.object().keys({
    // name: Joi.string().pattern( new RegExp(Regexs.)).min(3).max(30).required(),
    surname: Joi.string().alphanum().min(3).max(30).required(),
    id: Joi.number().integer().min(1).required(),
    team_id: Joi.number().integer().min(1).optional(),
    photo: Joi.string().optional(),
});
