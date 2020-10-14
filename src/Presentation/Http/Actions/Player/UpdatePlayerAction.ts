import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import UpdatePlayerHandler from '../../../../Aplication/Handlers/Player/UpdatePlayerHandler';
import UpdatePlayerAdapter from '../../Adapters/Player/UpdatePlayerAdapter';

@injectable()
class UpdatePlayerAction {
    private UpdatePlayerAdapter: UpdatePlayerAdapter;
    private UpdatePlayerHandler: UpdatePlayerHandler;

    constructor(
        @inject(UpdatePlayerAdapter) UpdatePlayerAdapter: UpdatePlayerAdapter,
        @inject(UpdatePlayerHandler) UpdatePlayerHandler: UpdatePlayerHandler,
    ) {
        this.UpdatePlayerAdapter = UpdatePlayerAdapter;
        this.UpdatePlayerHandler = UpdatePlayerHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {
        const command = this.UpdatePlayerAdapter.adapt(request.body);

        const result = await this.UpdatePlayerHandler.handle(command);

        return response.status(200).json(result);
    }
}

export default UpdatePlayerAction;

