import { NextFunction, Request, Response } from 'express';
import HttpError from "../../Errors/HttpError";

function withErrorStack(error: string, stack: string) {
    if (process.env.NODE_ENV !== 'production') {
        return {error, stack}
    }
    return error
}

// @ts-ignore
export function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction) {
    res.status(err.status || 500)
    res.json(withErrorStack(err.message, err.stack))
}