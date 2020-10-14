import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import UpdatePlayerHandler from '../../../../Aplication/Handlers/Player/UpdatePlayerHandler';
import UpdatePlayerAdapter from '../../Adapters/Player/UpdatePlayerAdapter';

@injectable()
class UpdatePlayerAction {
    private updatePlayerAdapter: UpdatePlayerAdapter;
    private updatePlayerHandler: UpdatePlayerHandler;

    constructor(
        @inject(UpdatePlayerAdapter) updatePlayerAdapter: UpdatePlayerAdapter,
        @inject(UpdatePlayerHandler) updatePlayerHandler: UpdatePlayerHandler,
    ) {
        this.updatePlayerAdapter = updatePlayerAdapter;
        this.updatePlayerHandler = updatePlayerHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {
        const command = this.updatePlayerAdapter.adapt(request.body);

        const result = await this.updatePlayerHandler.handle(command);

        return response.status(200).json(result);
    }
}

export default UpdatePlayerAction;
