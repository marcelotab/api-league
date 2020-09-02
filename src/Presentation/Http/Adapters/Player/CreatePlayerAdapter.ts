import CreatePlayerCommand from "../../../../Aplication/Commands/Player/CreatePlayerCommand";
import Validator from "../../Validations/Validator";
import {inject, injectable} from "inversify";
import {PlayerSchema} from "../../Validations/Schemas/PlayerSchema";

@injectable()
class CreateTeamAdapter {

    private validator: Validator;

    constructor(
        @inject(Validator) validator: Validator
    ) {
        this.validator = validator;
    }

    public adapt(data: any): CreatePlayerCommand {

        const rules = this.getValidationRules();
        const errors = this.validator.validate(data, rules);
        if (errors) {
            console.log(errors);
        }

        const {name, surname, status, team_id } = data
        return new CreatePlayerCommand(name, surname, status, team_id === undefined? null : team_id);
    }

    private getValidationRules = () => PlayerSchema;

}

export default CreateTeamAdapter;
