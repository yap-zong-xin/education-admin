import { AppError } from "../utils/AppError.js";

export function errorHandler(err, req, res, next) {
    if (res.headersSent) return next(err);

    if (err.type === "entity.parse.failed") {
        err = AppError.badRequest("Invalid JSON request body.");
    }

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }

    console.error(err);

    return res.status(500).json({
        error: "Internal server error.",
    });
}
