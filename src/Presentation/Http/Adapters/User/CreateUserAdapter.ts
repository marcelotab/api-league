import CreateUserCommand from "../../../../Aplication/Commands/User/CreateUserCommand";
import Validator from "../../Validations/Validator";
import {inject, injectable} from "inversify";
import {UserSchema} from "../../Validations/Schemas/UserSchema";

@injectable()
class CreateUserAdapter {

    private validator: Validator;

    constructor(
        @inject(Validator) validator: Validator
    ) {
        this.validator = validator;
    }

    public adapt(data: any): CreateUserCommand {

        const rules = this.getValidationRules();
        console.log(data);
        const errors = this.validator.validate(data, rules);
        if (errors) {
            console.log(errors);
        }

        const {name, surname, email, password} = data;
        return new CreateUserCommand(name, surname, email, password);
    }

    private getValidationRules = () => UserSchema;

}

export default CreateUserAdapter;