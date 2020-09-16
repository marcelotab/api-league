import {Request, Response} from 'express';
import {inject, injectable} from "inversify";
import LoginAdapter from "../../Adapters/Auth/LoginAdapter";
import LoginHandler from "../../../../Aplication/Handlers/Auth/LoginHandler";

@injectable()
class LoginAction {

    private loginAdapter: LoginAdapter;
    private loginHandler: LoginHandler;

    constructor(
        @inject(LoginAdapter) loginAdapter: LoginAdapter,
        @inject(LoginHandler) loginHandler: LoginHandler,
    ) {
        this.loginAdapter = loginAdapter;
        this.loginHandler = loginHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {

        const command = this.loginAdapter.adapt(request.body);

        try {
            const result = await this.loginHandler.handle(command);
            return response.status(200).json(result);

        }catch (e) {
            console.log(e.message);
            return response.status(401).json(e.message);
        }

    }

}

export default LoginAction;