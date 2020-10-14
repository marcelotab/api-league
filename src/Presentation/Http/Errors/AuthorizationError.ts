import BaseHttpError from "./BaseHttpError";

class AuthorizationError extends BaseHttpError {
    public constructor(message: string, status: number) {
        super(AuthorizationError.name, message, status);
        this.status = status || 500;
    }
}

export default AuthorizationError;