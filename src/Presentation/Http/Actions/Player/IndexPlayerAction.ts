import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import IndexPlayerHandler from '../../../../Aplication/Handlers/Player/IndexPlayerHandler';

@injectable()
class IndexPlayerAction {
    private IndexPlayerHandler: IndexPlayerHandler;

    constructor(@inject(IndexPlayerHandler) IndexPlayerHandler: IndexPlayerHandler) {
        this.IndexPlayerHandler = IndexPlayerHandler;
    }

    // @ts-ignore
    public async execute(request: Request, response: Response): Promise<Response> {
        const result = await this.IndexPlayerHandler.handle();

        return response.status(200).json(result);
    }
}

export default IndexPlayerAction;
