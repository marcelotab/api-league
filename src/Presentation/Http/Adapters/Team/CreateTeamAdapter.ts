import CreateTeamCommand from "../../../../Aplication/Commands/Team/CreateTeamCommand";
import Validator from "../../Validations/Validator";
import {inject, injectable} from "inversify";
import {TeamSchema} from "../../Validations/Schemas/TeamSchema";

@injectable()
class CreateTeamAdapter {

    private validator: Validator;

    constructor(
        @inject(Validator) validator: Validator
    ) {
        this.validator = validator;
    }

    public adapt(data: any): CreateTeamCommand {

        const rules = this.getValidationRules();
        console.log(data);
        const errors = this.validator.validate(data, rules);
        if (errors) {
            console.log(errors);
        }

        const {name} = data;
        return new CreateTeamCommand(name);
    }

    private getValidationRules = () => TeamSchema;

}

export default CreateTeamAdapter;