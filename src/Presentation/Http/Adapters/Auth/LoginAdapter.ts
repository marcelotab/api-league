import {injectable} from "inversify";
import LoginCommand from "../../../../Aplication/Commands/Auth/LoginCommand";

@injectable()
class LoginAdapter {

    public adapt(data: any): LoginCommand {

        const {email, password} = data;

        return new LoginCommand(email, password);
    }

}

export default LoginAdapter;
