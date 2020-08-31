// import IndexTeamCommand from "../../../../Aplication/Commands/Team/IndexTeamCommand";
import Validator from "../../Validations/Validator";
import {inject, injectable} from "inversify";
// import {TeamSchema} from "../../Validations/Schemas/TeamSchema";
import IndexTeamCommand from "../../../../Aplication/Commands/Team/IndexTeamCommand";

@injectable()
class IndexTeamAdapter {

    private validator: Validator;

    constructor(
        @inject(Validator) validator: Validator
    ) {
        this.validator = validator;
    }

    // public adapt(data: any): IndexTeamCommand {
    //
    //     const rules = this.getValidationRules();
    //     console.log(data);
    //     const errors = this.validator.validate(data, rules);
    //     if (errors) {
    //         console.log(errors);
    //     }
    //
    //     const {name} = data;
    //     return new IndexTeamCommand(name);
    // }

    // private getValidationRules = () => TeamSchema;

}

export default IndexTeamAdapter;