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

export async function findAllClasses() {
    const query = `
        SELECT
            c.level,
            c.name,
            t.name AS "teacherName"
        FROM classes c
        JOIN teachers t ON c.teacher_id = t.id
        ORDER BY c.id ASC
    `;

    const result = await pool.query(query);

    return result.rows;
}
