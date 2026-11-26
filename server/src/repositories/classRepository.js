import pool from "../config/db.js";

export async function insertClass(classData) {
    const { level, name, teacherId } = classData;

    const query = `
        INSERT INTO classes (level, name, teacher_id)
        VALUES ($1, $2, $3)
        RETURNING id, level, name, teacher_id AS "teacherId"
    `;

    const values = [level, name, teacherId];

    const result = await pool.query(query, values);

    return result.rows[0];
}
