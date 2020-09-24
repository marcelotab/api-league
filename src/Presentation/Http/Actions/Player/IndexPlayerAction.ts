import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import IndexPlayerHandler from '../../../../Aplication/Handlers/Player/IndexPlayerHandler';

@injectable()
class IndexPlayerAction {
    private indexPlayerHandler: IndexPlayerHandler;

    constructor(@inject(IndexPlayerHandler) indexPlayerHandler: IndexPlayerHandler) {
        this.indexPlayerHandler = indexPlayerHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {
        console.log(request.body);
        const result = await this.indexPlayerHandler.handle();

        return response.status(200).json(result);
    }
}

export default IndexPlayerAction;
