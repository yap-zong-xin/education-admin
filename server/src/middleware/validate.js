import { AppError } from "../utils/AppError.js";

export function validate(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            throw AppError.badRequest(result.error.issues[0].message);
        }

        req.body = result.data;

        next();
    };
}
