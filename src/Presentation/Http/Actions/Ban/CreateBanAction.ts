import {Request, Response} from 'express';
import {inject, injectable} from 'inversify';
import CreateBanAdapter from '../../Adapters/Ban/CreateBanAdapter';
import CreateBanHandler from '../../../../Aplication/Handlers/Ban/CreateBanHandler';

@injectable()
class CreateBanAction {
    private createBanAdapter: CreateBanAdapter;
    private createBanHandler: CreateBanHandler;

    constructor(
        @inject(CreateBanAdapter) createBanAdapter: CreateBanAdapter,
        @inject(CreateBanHandler) createBanHandler: CreateBanHandler,
    ) {
        this.createBanAdapter = createBanAdapter;
        this.createBanHandler = createBanHandler;
    }

    public async execute(request: Request, response: Response): Promise<Response> {
        const command = this.createBanAdapter.adapt(request.body);

        const result = await this.createBanHandler.handle(command);

        return response.status(200).json(result);
    }
}

export default CreateBanAction;
