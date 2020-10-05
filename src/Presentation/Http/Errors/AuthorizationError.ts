import BaseHttpError from "./BaseHttpError";

export default class AuthorizationError extends BaseHttpError {
    public constructor(message: string, status: number) {
        super(AuthorizationError.name, message, status);
        this.status = status || 500;
    }
}