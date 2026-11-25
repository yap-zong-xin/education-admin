import { registerTeacher, getAllTeachers } from "../services/teacherService.js";

export async function createTeacher(req, res) {
    const teacher = await registerTeacher(req.body);

    res.status(201).json({
        data: teacher,
    });
}

export async function getTeachers(req, res) {
    const teachers = await getAllTeachers();

    res.status(200).json({
        data: teachers,
    });
}
