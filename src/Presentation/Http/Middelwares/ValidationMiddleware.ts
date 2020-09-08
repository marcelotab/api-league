import { NextFunction, Request, Response } from 'express';
import {Schema} from 'joi';

function validate(data: any, rules: Schema) {
    const { error } = rules.validate(data);
    return error;
}

export function validationMiddleware(rules: Schema, check = 'body') {
    return function(req: Request, res: Response, next: NextFunction) {
        console.log(res)
        const error = validate(req[check], rules);

        error ? next(error) : next();
      };
}