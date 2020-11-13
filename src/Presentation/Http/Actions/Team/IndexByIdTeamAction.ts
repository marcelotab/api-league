import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import IndexByIdTeamPlayerHandler from '../../../../Aplication/Handlers/Team/IndexByIdTeamHandler';
import IndexByIdTeamAdapter from '../../Adapters/Team/IndexByIdTeamAdapter';

@injectable()
class IndexByIdTeamAction {
    private indexByIdTeamPlayerHandler: IndexByIdTeamPlayerHandler;
    private indexByIdTeamPlayerAdapter: IndexByIdTeamAdapter;

    constructor(
        @inject(IndexByIdTeamPlayerHandler) indexByIdPlayerHandler: IndexByIdTeamPlayerHandler,
        @inject(IndexByIdTeamAdapter) indexByIdTeamPlayerAdapter: IndexByIdTeamAdapter,
    ) {
        this.indexByIdTeamPlayerHandler = indexByIdPlayerHandler;
        this.indexByIdTeamPlayerAdapter = indexByIdTeamPlayerAdapter;
    }

    // @ts-ignore
    public async execute(request: Request, response: Response): Promise<Response> {
        const command = this.indexByIdTeamPlayerAdapter.adapt(request.params);

        const result = await this.indexByIdTeamPlayerHandler.handle(command);

        return response.status(200).json(result);
    }
}

export default IndexByIdTeamAction;
