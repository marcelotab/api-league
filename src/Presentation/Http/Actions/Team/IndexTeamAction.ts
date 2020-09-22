// import IndexTeamAdapter from "../../Adapters/Team/IndexTeamAdapter";
import { inject, injectable } from 'inversify';
import IndexTeamHandler from '../../../../Aplication/Handlers/Team/IndexTeamHandler';
import { Request, Response } from 'express';

@injectable()
class IndexTeamAction {
    // private IndexTeamAdapter: IndexTeamAdapter;
    private IndexTeamHandler: IndexTeamHandler;

    constructor(
        // @inject(IndexTeamAdapter) IndexTeamAdapter: IndexTeamAdapter,
        @inject(IndexTeamHandler) IndexTeamHandler: IndexTeamHandler,
    ) {
        // this.IndexTeamAdapter = IndexTeamAdapter;
        this.IndexTeamHandler = IndexTeamHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {
        // const command = this.IndexTeamAdapter.adapt(request.body);
        console.log(request.body);
        // const result = this.IndexTeamHandler.handle(command);
        const result = await this.IndexTeamHandler.handle();

        return response.status(200).json(result);
    }
}

export default IndexTeamAction;
