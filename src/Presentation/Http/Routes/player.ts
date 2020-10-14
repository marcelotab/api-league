import {CreatePlayerSchema} from '../Validations/Schemas/Player/CreatePlayerSchema';
import {Request, Response, Router} from 'express';
import {inject, injectable} from 'inversify';
import {asyncMiddleware} from '../Middelwares/AsyncMiddleware';
import {validationMiddleware} from '../Middelwares/ValidationMiddleware';
import CreatePlayerAction from '../Actions/Player/CreatePlayerAction';
import IndexPlayerAction from '../Actions/Player/IndexPlayerAction';
import {isAuthenticatedMiddleware} from '../Middelwares/Auth/IsAuthenticatedMiddleware';
import DeletePlayerAction from "../Actions/Player/DeletePlayerAction";
import {DeletePlayerSchema} from "../Validations/Schemas/Player/DeletePlayerScheama";

@injectable()
class PlayerRoutes {
    private router: Router;
    private createPlayerAction: CreatePlayerAction;
    private indexPlayerAction: IndexPlayerAction;
    private deletePlayerAction: DeletePlayerAction;

    public constructor(
        @inject(CreatePlayerAction) createPlayerAction: CreatePlayerAction,
        @inject(IndexPlayerAction) indexPlayerAction: IndexPlayerAction,
        @inject(DeletePlayerAction) deletePlayerAction: DeletePlayerAction,
    ) {
        this.router = Router();
        this.createPlayerAction = createPlayerAction;
        this.indexPlayerAction = indexPlayerAction;
        this.deletePlayerAction = deletePlayerAction;
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.post(
            '/',
            isAuthenticatedMiddleware(),
            validationMiddleware(CreatePlayerSchema),
            asyncMiddleware(async (request: Request, response: Response) => {
                await this.createPlayerAction.execute(request, response);
            }),
        );

        this.router.get(
            '/',
            isAuthenticatedMiddleware(),
            asyncMiddleware(async (request: Request, response: Response) => {
                await this.indexPlayerAction.execute(request, response);
            }),
        );

        this.router.delete(
            '/:id',
            isAuthenticatedMiddleware(),
            validationMiddleware(DeletePlayerSchema, 'params'),
            asyncMiddleware(async (request: Request, response: Response) => {
                await this.deletePlayerAction.execute(request, response);
            }),
        );
    }

    public getRoutes(): Router {
        return this.router;
    }
}

export default PlayerRoutes;
