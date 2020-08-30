import * as express from 'express';
import {inject, injectable} from "inversify";
import UserRoutes from "./user";

@injectable()
class ApiRoutes {

    private router: express.Router;
    private userRoutes: UserRoutes;

    public constructor(
        @inject(UserRoutes) userRoutes: UserRoutes
    ) {

        this.router = express.Router();
        this.userRoutes = userRoutes;
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get('/', (_req, res) => {
            res.send('Hello World!');
        });
        this.router.use('/users', this.userRoutes.getRoutes());
    }

    public getRoutes(): express.Router {
        return this.router;
    }
}

export default ApiRoutes;