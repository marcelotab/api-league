import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import DeleteTeamHandler from '../../../../Aplication/Handlers/Team/DeleteTeamHandler';
import DeleteTeamAdapter from '../../Adapters/Team/DeleteTeamAdapter';

@injectable()
class CreateTeamAction {
    private deleteTeamAdapter: DeleteTeamAdapter;
    private deleteTeamHandler: DeleteTeamHandler;

    constructor(
        @inject(DeleteTeamAdapter) deleteTeamAdapter: DeleteTeamAdapter,
        @inject(DeleteTeamHandler) deleteTeamHandler: DeleteTeamHandler,
    ) {
        this.deleteTeamAdapter = deleteTeamAdapter;
        this.deleteTeamHandler = deleteTeamHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {
        const command = this.deleteTeamAdapter.adapt(request.params);

        const result = await this.deleteTeamHandler.handle(command);

        return response.status(200).json(result);
    }
}

export default CreateTeamAction;
