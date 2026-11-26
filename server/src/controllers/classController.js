import { registerClass } from "../services/classService.js";

export async function createClass(req, res) {
    const newClass = await registerClass(req.body);

    res.status(201).json({ data: newClass });
}
