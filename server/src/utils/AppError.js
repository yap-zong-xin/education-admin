export class AppError extends Error {
    constructor(message, statusCode, options = {}) {
        super(message, options);

        this.name = "AppError";
        this.statusCode = statusCode;
    }

    static badRequest(message, options) {
        return new AppError(message, 400, options);
    }

    static notFound(message, options) {
        return new AppError(message, 404, options);
    }

    static conflict(message, options) {
        return new AppError(message, 409, options);
    }
}
