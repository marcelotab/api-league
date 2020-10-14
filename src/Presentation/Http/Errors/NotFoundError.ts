import BaseHttpError from "./BaseHttpError";

class NotFoundError extends BaseHttpError {
    public constructor(message: string, status: number) {
        super(NotFoundError.name, message, status);
        this.status = status || 500;
    }
}
export default NotFoundError;