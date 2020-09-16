import { NextFunction, Request, Response } from 'express';
import HttpError from "../../Errors/HttpError";

// @ts-ignore
export function errorLog(err: HttpError, req: Request, res: Response, next: NextFunction) {
    console.log(err);
    next(err);
}
