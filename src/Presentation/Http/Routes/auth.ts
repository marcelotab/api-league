import { Router, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { asyncMiddleware } from '../Middelwares/AsyncMiddleware';
import { validationMiddleware } from '../Middelwares/ValidationMiddleware';
import LoginAction from '../Actions/Auth/LoginAction';
import { LoginSchema } from '../Validations/Schemas/Auth/LoginSchema';

@injectable()
class AuthRoutes {
    private router: Router;
    private loginAction: LoginAction;

    public constructor(@inject(LoginAction) loginAction: LoginAction) {
        this.router = Router();
        this.setRoutes();
        this.loginAction = loginAction;
    }

    private setRoutes(): void {
        this.router.post(
            '/login',
            validationMiddleware(LoginSchema),
            asyncMiddleware((request: Request, response: Response) => {
                this.loginAction.execute(request, response);
            }),
        );
    }

    public getRoutes(): Router {
        return this.router;
    }
}

export default AuthRoutes;
