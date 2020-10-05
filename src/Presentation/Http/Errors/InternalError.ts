import BaseHttpError from "./BaseHttpError";

export default class InternalError extends BaseHttpError {
    public constructor(message: string, status: number) {
        super(InternalError.name, message, status);
        this.status = status || 500;

    }
}