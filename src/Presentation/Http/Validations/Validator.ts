import {Schema} from "joi";
import {injectable} from "inversify";

@injectable()
class Validator {

    public validate(data: any, rules: Schema) {

        return rules.validate(data);
    }

}

export default Validator;