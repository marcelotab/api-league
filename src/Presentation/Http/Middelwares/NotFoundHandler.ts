import { Request, Response } from 'express';

    // @ts-ignore
export function notFoundHandler(req: Request, res: Response) {
    //{ message, status } = new ErrorBadRequest

    res.status(404).json('Not Found')
}