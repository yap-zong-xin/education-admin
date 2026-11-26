import { registerClass, getAllClasses } from "../services/classService.js";

export async function createClass(req, res) {
    const newClass = await registerClass(req.body);

    res.status(201).json({ data: newClass });
}

export async function getClasses(req, res) {
    const classes = await getAllClasses();

    res.status(200).json({ data: classes });
}
