import { CreatePlayerSchema } from '../Validations/Schemas/Player/CreatePlayerSchema';
import { Router, Request, Response } from 'express';
import {inject, injectable} from "inversify";
import {asyncMiddleware} from "../Middelwares/AsyncMiddleware";
import {validationMiddleware} from "../Middelwares/ValidationMiddleware";
import CreatePlayerAction from "../Actions/Player/CreatePlayerAction";
import IndexPlayerAction from "../Actions/Player/IndexPlayerAction"

@injectable()
class PlayerRoutes {

    private router: Router;
    private createPlayerAction: CreatePlayerAction;
    private indexPlayerAction: IndexPlayerAction;

    public constructor(
        @inject(CreatePlayerAction) createPlayerAction: CreatePlayerAction,
        @inject(IndexPlayerAction) indexPlayerAction: IndexPlayerAction
    ) {
        this.router = Router();
        this.createPlayerAction = createPlayerAction;
        this.indexPlayerAction = indexPlayerAction;
        this.setRoutes();
    }

    private setRoutes(): void {

        this.router.post('/',
            validationMiddleware(CreatePlayerSchema),
            asyncMiddleware((request: Request, response: Response) => {
                this.createPlayerAction.execute(request, response);
            }),
        );
        
        this.router.get('/',
            asyncMiddleware((request: Request, response: Response) => {
                this.indexPlayerAction.execute(request, response);
            }),
        );
    }

    public getRoutes() {
        return this.router;
    }
}

export default PlayerRoutes;