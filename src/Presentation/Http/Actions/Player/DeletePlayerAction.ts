import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import DeletePlayerHandler from '../../../../Aplication/Handlers/Player/DeletePlayerHandler';
import DeletePlayerAdapter from '../../Adapters/Player/DeletePlayerAdapter';

@injectable()
class DeletePlayerAction {
    private deletePlayerAdapter: DeletePlayerAdapter;
    private deletePlayerHandler: DeletePlayerHandler;

    constructor(
        @inject(DeletePlayerAdapter) deletePlayerAdapter: DeletePlayerAdapter,
        @inject(DeletePlayerHandler) deletePlayerHandler: DeletePlayerHandler,
    ) {
        this.deletePlayerAdapter = deletePlayerAdapter;
        this.deletePlayerHandler = deletePlayerHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {
        console.log('entro');

        const command = this.deletePlayerAdapter.adapt(request.params);

        const result = await this.deletePlayerHandler.handle(command);

        return response.status(200).json(result);
    }
}

export default DeletePlayerAction;

