import { AppError } from "../utils/AppError.js";

export function errorHandler(err, req, res, next) {
    if (res.headersSent) return next(err);

    const error =
        err.type === "entity.parse.failed"
            ? AppError.badRequest("Invalid JSON request body.", {
                  cause: err,
              })
            : err;

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            error: error.message,
        });
    }

    console.error(`[${req.method} ${req.path}]`, error);

    return res.status(500).json({
        error: "Internal server error.",
    });
}
