import * as express from 'express';
import { asyncMiddleware } from '../Middelwares/AsyncMiddleware';
import CreateTeamAction from '../Actions/Team/CreateTeamAction';
import { inject, injectable } from 'inversify';
import IndexTeamAction from '../Actions/Team/IndexTeamAction';
import { validationMiddleware } from '../Middelwares/ValidationMiddleware';
import { isAuthenticatedMiddleware } from '../Middelwares/Auth/IsAuthenticatedMiddleware';
import { CreateTeamSchema } from '../Validations/Schemas/Team/CreateTeamSchema';

@injectable()
class TeamRoutes {
    private router: express.Router;
    private createTeamAction: CreateTeamAction;
    private indexTeamAction: IndexTeamAction;

    public constructor(
        @inject(CreateTeamAction) createTeamAction: CreateTeamAction,
        @inject(IndexTeamAction) indexTeamAction: IndexTeamAction,
    ) {
        this.router = express.Router();
        this.createTeamAction = createTeamAction;
        this.indexTeamAction = indexTeamAction;
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.post(
            '/',
            isAuthenticatedMiddleware(),
            validationMiddleware(CreateTeamSchema),
            asyncMiddleware(async (request: express.Request, response: express.Response) => {
                await this.createTeamAction.execute(request, response);
            }),
        );
        this.router.get(
            '/',
            isAuthenticatedMiddleware(),
            asyncMiddleware(async (request: express.Request, response: express.Response) => {
                await this.indexTeamAction.execute(request, response);
            }),
        );
    }

    public getRoutes(): express.Router {
        return this.router;
    }
}

export default TeamRoutes;
