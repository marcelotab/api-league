import { NextFunction, Request, Response } from 'express';

export function asyncMiddleware(func: Function): any {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(func(req, res, next)).catch(next);
    };
}
