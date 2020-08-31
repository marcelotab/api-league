import CreateTeamAdapter from "../../Adapters/Team/CreateTeamAdapter";
import {inject, injectable} from "inversify";
import CreateTeamHandler from "../../../../Aplication/Handlers/Team/CreateTeamHandler";
import { Request, Response } from 'express';

@injectable()
class CreateTeamAction {

    private createTeamAdapter: CreateTeamAdapter;
    private createTeamHandler: CreateTeamHandler;

    constructor(
        @inject(CreateTeamAdapter) createTeamAdapter: CreateTeamAdapter,
        @inject(CreateTeamHandler) createTeamHandler: CreateTeamHandler,
    ) {
        this.createTeamAdapter = createTeamAdapter;
        this.createTeamHandler = createTeamHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {

        const command = this.createTeamAdapter.adapt(request.body);

        const result = this.createTeamHandler.handle(command);

        return response.status(200).json(result);
    }

}

export default CreateTeamAction;