import CreateUserAdapter from "../../Adapters/User/CreateUserAdapter";
import {inject, injectable} from "inversify";
import CreateUserHandler from "../../../../Aplication/Handlers/User/CreateUserHandler";
import { Request, Response } from 'express';

@injectable()
class CreateUserAction {

    private createUserAdapter: CreateUserAdapter;
    private createUserHandler: CreateUserHandler;

    constructor(
        @inject(CreateUserAdapter) createUserAdapter: CreateUserAdapter,
        @inject(CreateUserHandler) createUserHandler: CreateUserHandler,
    ) {
        this.createUserAdapter = createUserAdapter;
        this.createUserHandler = createUserHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {

        const command = this.createUserAdapter.adapt(request.body);

        const result = await this.createUserHandler.handle(command);

        return response.status(200).json(result);
    }

}

export default CreateUserAction;