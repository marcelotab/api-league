// import IndexTeamAdapter from "../../Adapters/Team/IndexTeamAdapter";
import { inject, injectable } from 'inversify';
import IndexTeamHandler from '../../../../Aplication/Handlers/Team/IndexTeamHandler';
import { Request, Response } from 'express';

@injectable()
class IndexTeamAction {
    // private IndexTeamAdapter: IndexTeamAdapter;
    private indexTeamHandler: IndexTeamHandler;

    constructor(
        // @inject(IndexTeamAdapter) IndexTeamAdapter: IndexTeamAdapter,
        @inject(IndexTeamHandler) indexTeamHandler: IndexTeamHandler,
    ) {
        // this.IndexTeamAdapter = IndexTeamAdapter;
        this.indexTeamHandler = indexTeamHandler;
    }

    // @ts-ignore
    public async execute(request: Request, response: Response): Promise<Response> {
        // const command = this.IndexTeamAdapter.adapt(request.body);
        // const result = this.IndexTeamHandler.handle(command);
        const result = await this.indexTeamHandler.handle();

        return response.status(200).json(result);
    }
}

export default IndexTeamAction;
