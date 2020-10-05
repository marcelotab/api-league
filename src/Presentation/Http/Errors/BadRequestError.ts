import BaseHttpError from "./BaseHttpError";

export default class BadRequestError extends BaseHttpError {
    public constructor(message: string, status: number) {
        super(BadRequestError.name, message, status);

        this.status = status || 500;
    }
}