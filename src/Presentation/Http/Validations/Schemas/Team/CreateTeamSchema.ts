import Joi, {Schema} from "joi";

export const CreateTeamSchema: Schema = Joi.object().keys({
    name: Joi.string().required().min(3),
});