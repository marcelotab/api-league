import * as express from 'express';
import {asyncMiddleware} from "../Middelwares/AsyncMiddleware";
import CreateTeamAction from "../Actions/Team/CreateTeamAction";
import {inject, injectable} from "inversify";

@injectable()
class TeamRoutes {

    private router: express.Router;
    private createTeamAction: CreateTeamAction;

    public constructor(
        @inject(CreateTeamAction) createTeamAction: CreateTeamAction
    ) {
        this.router = express.Router();
        this.createTeamAction = createTeamAction;
        this.setRoutes();
    }

    private setRoutes(): void {

        this.router.post(
            '/', asyncMiddleware(async (request: express.Request, response: express.Response) => {
                await this.createTeamAction.execute(request, response);
            }),
        );
    }

    public getRoutes(){
        return this.router;
    }
}

export default TeamRoutes;