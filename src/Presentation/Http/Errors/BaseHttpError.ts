class BaseHttpError extends Error {
    status: number;
    constructor(name: string, message: string, status: number) {
        super(message);
        this.name = name;
        this.status = status || 500;
    }
}

export default BaseHttpError;
