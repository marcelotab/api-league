import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import CreatePlayerAdapter from '../../Adapters/Player/CreatePlayerAdapter';
import CreatePlayerHandler from '../../../../Aplication/Handlers/Player/CreatePlayerHandler';

@injectable()
class CreatePlayerAction {
    private createPlayerAdapter: CreatePlayerAdapter;
    private createPlayerHandler: CreatePlayerHandler;

    constructor(
        @inject(CreatePlayerAdapter) createPlayerAdapter: CreatePlayerAdapter,
        @inject(CreatePlayerHandler) createPlayerHandler: CreatePlayerHandler,
    ) {
        this.createPlayerAdapter = createPlayerAdapter;
        this.createPlayerHandler = createPlayerHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {
        const command = this.createPlayerAdapter.adapt(request.body);

        const result = await this.createPlayerHandler.handle(command);

        return response.status(201).json(result);
    }
}

export default CreatePlayerAction;
