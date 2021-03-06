import { NextFunction, Request, Response } from 'express';
import TokenService from '../../../../Aplication/Services/TokenService';

export function isAuthenticatedMiddleware() {
    return function (req: Request, res: Response, next: NextFunction): void {
        const token = <string>req.headers['authorization'];
        if (!token) {
            throw new Error('Not token provided');
        }

        const tokenService = new TokenService();

        try {
            tokenService.verify(token.replace('Bearer ', ''));
            next();
        } catch (e) {
            res.status(401).json(e);
        }
    };
}
