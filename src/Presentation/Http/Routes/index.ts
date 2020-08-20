import * as express from 'express';

class ApiRoutes {

    private router: express.Router;

    public constructor() {

        this.router = express.Router();
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get('/', (_req, res) => {
            res.send('Hello World!');
        });
    }

    public getRoutes(): express.Router {
        return this.router;
    }
}

export default ApiRoutes;