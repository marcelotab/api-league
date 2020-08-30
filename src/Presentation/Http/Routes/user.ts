import * as express from 'express';
import {asyncMiddleware} from "../Middelwares/AsyncMiddleware";
import CreateUserAction from "../Actions/User/CreateUserAction";
import {inject, injectable} from "inversify";

@injectable()
class UserRoutes {

    private router: express.Router;
    private createUserAction: CreateUserAction;

    public constructor(
        @inject(CreateUserAction) createUserAction: CreateUserAction
    ) {
        this.router = express.Router();
        this.createUserAction = createUserAction;
        this.setRoutes();
    }

    private setRoutes(): void {

        this.router.post(
            '/', asyncMiddleware(async (request: express.Request, response: express.Response) => {
                await this.createUserAction.execute(request, response);
            }),
        );
    }

    public getRoutes(){
        return this.router;
    }
}

export default UserRoutes;