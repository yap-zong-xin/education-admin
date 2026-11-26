import { insertClass } from "../repositories/classRepository.js";
import { findTeacherByEmail } from "../repositories/teacherRepository.js";
import { AppError } from "../utils/AppError.js";
import { PG_ERROR_CODES } from "../utils/constants.js";

export async function registerClass(classData) {
    const { level, name, teacherEmail } = classData;

    const teacher = await findTeacherByEmail(teacherEmail);

    if (!teacher) {
        throw AppError.notFound("Teacher not found.");
    }

    try {
        return await insertClass({
            level,
            name,
            teacherId: teacher.id,
        });
    } catch (error) {
        if (error.code === PG_ERROR_CODES.UNIQUE_VIOLATION) {
            throw AppError.conflict(
                "This teacher is already assigned to a class.",
                { cause: error },
            );
        }

        throw error;
    }
}
