import * as express from 'express';
import {asyncMiddleware} from "../Middelwares/AsyncMiddleware";
import CreateTeamAction from "../Actions/Team/CreateTeamAction";
import {inject, injectable} from "inversify";
import IndexTeamAction from "../Actions/Team/IndexTeamAction";

@injectable()
class TeamRoutes {

    private router: express.Router;
    private createTeamAction: CreateTeamAction;
    private indexTeamAction: IndexTeamAction;

    public constructor(
        @inject(CreateTeamAction) createTeamAction: CreateTeamAction,
        @inject(IndexTeamAction) indexTeamAction: IndexTeamAction
    ) {
        this.router = express.Router();
        this.createTeamAction = createTeamAction;
        this.indexTeamAction = indexTeamAction;
        this.setRoutes();
    }

    private setRoutes(): void {

        this.router.post(
            '/', asyncMiddleware(async (request: express.Request, response: express.Response) => {
                await this.createTeamAction.execute(request, response);
            }),
        );
        this.router.get(
            '/', asyncMiddleware(async (request: express.Request, response: express.Response) => {
                await this.indexTeamAction.execute(request, response);
            }),
        );
    }

    public getRoutes() {
        return this.router;
    }
}

export default TeamRoutes;