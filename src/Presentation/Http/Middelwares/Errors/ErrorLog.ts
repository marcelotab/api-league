import { NextFunction, Request, Response } from 'express';
import BaseHttpError from '../../Errors/BaseHttpError';

// @ts-ignore
export function errorLog(err: BaseHttpError, req: Request, res: Response, next: NextFunction): void {
    console.log(err);
    next(err);
}
