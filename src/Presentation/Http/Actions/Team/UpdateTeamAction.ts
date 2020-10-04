import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import UpdateTeamHandler from '../../../../Aplication/Handlers/Team/UpdateTeamHandler';
import UpdateTeamAdapter from '../../Adapters/Team/UpdateTeamAdapter';

@injectable()
class UpdateTeamAction {
    private updateTeamAdapter: UpdateTeamAdapter;
    private updateTeamHandler: UpdateTeamHandler;

    constructor(
        @inject(UpdateTeamAdapter) updateTeamAdapter: UpdateTeamAdapter,
        @inject(UpdateTeamHandler) updateTeamHandler: UpdateTeamHandler,
    ) {
        this.updateTeamAdapter = updateTeamAdapter;
        this.updateTeamHandler = updateTeamHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {
        const command = this.updateTeamAdapter.adapt(request.body);

        const result = await this.updateTeamHandler.handle(command);

        return response.status(200).json(result);
    }
}

export default UpdateTeamAction;
