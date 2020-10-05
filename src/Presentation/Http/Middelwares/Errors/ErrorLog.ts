import { NextFunction, Request, Response } from 'express';
import HttpError from '../../Errors/BaseHttpError';

// @ts-ignore
export function errorLog(err: HttpError, req: Request, res: Response, next: NextFunction): void {
    console.log(err);
    next(err);
}
