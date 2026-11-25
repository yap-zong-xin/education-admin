import { registerTeacher } from "../services/teacherService.js";

export async function createTeacher(req, res) {
    const teacher = await registerTeacher(req.body);

    res.status(201).json({
        data: teacher,
    });
}
