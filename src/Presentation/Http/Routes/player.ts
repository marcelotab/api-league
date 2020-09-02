import * as express from 'express';
import {inject, injectable} from "inversify";
import {asyncMiddleware} from "../Middelwares/AsyncMiddleware";
import CreatePlayerAction from "../Actions/Player/CreatePlayerAction";
import IndexPlayerAction from "../Actions/Player/IndexPlayerAction"

@injectable()
class PlayerRoutes {

    private router: express.Router;
    private createPlayerAction: CreatePlayerAction;
    private indexPlayerAction: IndexPlayerAction;

    public constructor(
        @inject(CreatePlayerAction) createPlayerAction: CreatePlayerAction,
        @inject(IndexPlayerAction) indexPlayerAction: IndexPlayerAction
    ) {
        this.router = express.Router();
        this.createPlayerAction = createPlayerAction;
        this.indexPlayerAction = indexPlayerAction;
        this.setRoutes();
    }

    private setRoutes(): void {

        this.router.post(
            '/', asyncMiddleware(async (request: express.Request, response: express.Response) => {
                await this.createPlayerAction.execute(request, response);
            }),
        );
        this.router.get(
            '/', asyncMiddleware(async (request: express.Request, response: express.Response) => {
                await this.indexPlayerAction.execute(request, response);
            }),
        );
    }

    public getRoutes() {
        return this.router;
    }
}

export default PlayerRoutes;