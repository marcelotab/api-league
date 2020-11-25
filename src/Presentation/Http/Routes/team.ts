import { Request, Response, Router } from 'express';
import { asyncMiddleware } from '../Middelwares/AsyncMiddleware';
import CreateTeamAction from '../Actions/Team/CreateTeamAction';
import IndexTeamAction from '../Actions/Team/IndexTeamAction';
import UpdateTeamAction from '../Actions/Team/UpdateTeamAction';
import DeleteTeamAction from '../Actions/Team/DeleteTeamAction';
import { inject, injectable } from 'inversify';
import { validationMiddleware } from '../Middelwares/ValidationMiddleware';
import { isAuthenticatedMiddleware } from '../Middelwares/Auth/IsAuthenticatedMiddleware';
import { CreateTeamSchema } from '../Validations/Schemas/Team/CreateTeamSchema';
import { UpdateTeamSchema } from '../Validations/Schemas/Team/UpdateTeamSchema';
import { DeleteTeamSchema } from '../Validations/Schemas/Team/DeleteTeamSchema';

@injectable()
class TeamRoutes {
    private router: Router;
    private createTeamAction: CreateTeamAction;
    private indexTeamAction: IndexTeamAction;
    private updateTeamAction: UpdateTeamAction;
    private deleteTeamAction: DeleteTeamAction;

    public constructor(
        @inject(CreateTeamAction) createTeamAction: CreateTeamAction,
        @inject(IndexTeamAction) indexTeamAction: IndexTeamAction,
        @inject(UpdateTeamAction) updateTeamAction: UpdateTeamAction,
        @inject(DeleteTeamAction) deleteTeamAction: DeleteTeamAction,
    ) {
        this.router = Router();
        this.createTeamAction = createTeamAction;
        this.indexTeamAction = indexTeamAction;
        this.updateTeamAction = updateTeamAction;
        this.deleteTeamAction = deleteTeamAction;
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.post(
            '/',
            // isAuthenticatedMiddleware(),
            validationMiddleware(CreateTeamSchema,'body'),
            asyncMiddleware(async (request: Request, response: Response) => {
                await this.createTeamAction.execute(request, response);
            }),
        );
        this.router.get(
            '/',
            isAuthenticatedMiddleware(),
            asyncMiddleware(async (request: Request, response: Response) => {
                await this.indexTeamAction.execute(request, response);
            }),
        );

        this.router.put(
            '/',
            // isAuthenticatedMiddleware(),
            validationMiddleware(UpdateTeamSchema),
            asyncMiddleware(async (request: Request, response: Response) => {
                await this.updateTeamAction.execute(request, response);
            }),
        );

        this.router.delete(
            '/:id',
            isAuthenticatedMiddleware(),
            validationMiddleware(DeleteTeamSchema, 'params'),
            asyncMiddleware(async (request: Request, response: Response) => {
                await this.deleteTeamAction.execute(request, response);
            }),
        );
    }

    public getRoutes(): Router {
        return this.router;
    }
}

export default TeamRoutes;
