import { insertTeacher } from "../repositories/teacherRepository.js";
import { AppError } from "../utils/AppError.js";
import { PG_ERROR_CODES } from "../utils/constants.js";

export async function registerTeacher(teacher) {
    try {
        return await insertTeacher(teacher);
    } catch (error) {
        if (error.code === PG_ERROR_CODES.UNIQUE_VIOLATION) {
            throw AppError.conflict("Email already exists.");
        }

        throw error;
    }
}
