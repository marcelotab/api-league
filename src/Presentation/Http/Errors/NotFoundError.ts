import BaseHttpError from "./BaseHttpError";

export default class NotFoundError extends BaseHttpError {
    public constructor(message: string, status: number) {
        super(NotFoundError.name, message, status);
        this.status = status || 500;
    }
}