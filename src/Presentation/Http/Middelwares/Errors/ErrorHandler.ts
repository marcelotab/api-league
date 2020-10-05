import { NextFunction, Request, Response } from 'express';
import HttpError from '../../Errors/BaseHttpError';

function withErrorStack(error: string, stack: string) {
    if (process.env.NODE_ENV !== 'production') {
        return { error, stack };
    }
    return error;
}

// @ts-ignore
// eslint-disable-next-line no-unused-vars
export function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction): void {
    res.status(err.status || 500);
    res.json(withErrorStack(err.message, err.stack));
}
