import BaseHttpError from "./BaseHttpError";

class AuthenticationError extends BaseHttpError {

    public constructor(message: string, status: number) {
        super(AuthenticationError.name, message, status,);

        this.status = status || 500;

    }
}