import {NextFunction, Request, Response} from 'express';
import TokenService from "../../../../Aplication/Services/TokenService";

export function isAuthenticatedMiddleware() {

    return function (req: Request, res: Response, next: NextFunction) {

        const token = <string> req.headers['authorization'];
        if (!token) {
            throw new Error('Not token provided');
        }

        const tokenService = new TokenService();

        try {
            tokenService.verify(token.split(' ')[1]);
            next();
        } catch (e) {
            res.status(401).json(e);
        }
    }

}