export class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }

    static badRequest(message) {
        return new AppError(message, 400);
    }

    static notFound(message) {
        return new AppError(message, 404);
    }

    static conflict(message) {
        return new AppError(message, 409);
    }
}
