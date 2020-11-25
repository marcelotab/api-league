import { Request, Response, Router } from 'express';
import { asyncMiddleware } from '../Middelwares/AsyncMiddleware';
import CreateBanAction from '../Actions/Ban/CreateBanAction';
import { inject, injectable } from 'inversify';
import { CreateBanSchema } from './../Validations/Schemas/Ban/CreateBanSchema';
import { validationMiddleware } from '../Middelwares/ValidationMiddleware';
import { isAuthenticatedMiddleware } from '../Middelwares/Auth/IsAuthenticatedMiddleware';
import IndexBanAction from '../Actions/Ban/IndexBanAction';
import { DeleteBanSchema } from '../Validations/Schemas/Ban/DeleteBanScheama';
import DeleteBanAction from '../Actions/Ban/DeleteBanAction';

@injectable()
class BanRoutes {
    private router: Router;
    private createBanAction: CreateBanAction;
    private indexBanAction: IndexBanAction;
    private deleteBanAction: DeleteBanAction;

    public constructor(
        @inject(CreateBanAction) createBanAction: CreateBanAction,
        @inject(IndexBanAction) indexBanAction: IndexBanAction,
        @inject(DeleteBanAction) deleteBanAction: DeleteBanAction,
    ) {
        this.router = Router();
        this.createBanAction = createBanAction;
        this.indexBanAction = indexBanAction;
        this.deleteBanAction = deleteBanAction;
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.post(
            '/',
            isAuthenticatedMiddleware(),
            validationMiddleware(CreateBanSchema),
            asyncMiddleware(async (request: Request, response: Response) => {
                await this.createBanAction.execute(request, response);
            }),
        );

        this.router.get(
            '/',
            isAuthenticatedMiddleware(),
            asyncMiddleware(async (request: Request, response: Response) => {
                await this.indexBanAction.execute(request, response);
            }),
        );

        this.router.delete(
            '/:id',
            isAuthenticatedMiddleware(),
            validationMiddleware(DeleteBanSchema, 'params'),
            asyncMiddleware(async (request: Request, response: Response) => {
                await this.deleteBanAction.execute(request, response);
            }),
        );
    }

    public getRoutes(): Router {
        return this.router;
    }
}

export default BanRoutes;
