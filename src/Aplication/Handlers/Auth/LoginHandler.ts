import {inject, injectable} from "inversify";
import AuthService from "../../Services/AuthService";
import LoginCommand from "../../Commands/Auth/LoginCommand";


@injectable()
class LoginHandler {

    private authService: AuthService;

    constructor(
        @inject(AuthService) authService: AuthService,
    ) {
        this.authService = authService;
    }

    public async handle(command: LoginCommand){

        const email = command.getEmail();
        const password = command.getPassword();

        try {
              return this.authService.signIn(email, password);

        }catch (e) {
            return console.log(e.message);
        }
    }
}

export default LoginHandler;