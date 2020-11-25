import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import DeleteBanHandler from '../../../../Aplication/Handlers/Ban/DeleteBanHandler';
import DeleteBanAdapter from '../../Adapters/Ban/DeleteBanAdapter';

@injectable()
class DeleteBanAction {
    private deleteBanAdapter: DeleteBanAdapter;
    private deleteBanHandler: DeleteBanHandler;

    constructor(
        @inject(DeleteBanAdapter) deleteBanAdapter: DeleteBanAdapter,
        @inject(DeleteBanHandler) deleteBanHandler: DeleteBanHandler,
    ) {
        this.deleteBanAdapter = deleteBanAdapter;
        this.deleteBanHandler = deleteBanHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {
        const command = this.deleteBanAdapter.adapt(request.params);

        const result = await this.deleteBanHandler.handle(command);

        return response.status(200).json(result);
    }
}

export default DeleteBanAction;
