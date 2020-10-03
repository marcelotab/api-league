import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import IndexBanHandler from '../../../../Aplication/Handlers/Ban/IndexBanHandler';

@injectable()
class IndexBanAction {
    private indexBanHandler: IndexBanHandler;

    constructor(@inject(IndexBanHandler) indexBanHandler: IndexBanHandler) {
        this.indexBanHandler = indexBanHandler;
    }

    // @ts-ignore
    public async execute(request: Request, response: Response): Promise<Response> {
        const result = await this.indexBanHandler.handle();

        return response.status(200).json(result);
    }
}

export default IndexBanAction;
