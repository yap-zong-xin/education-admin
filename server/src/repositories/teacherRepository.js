import pool from "../config/db.js";

export async function insertTeacher(teacher) {
    const { name, subject, email, contactNumber } = teacher;

    const query = `
        INSERT INTO teachers (name, subject, email, contact)
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, subject, email, contact AS "contactNumber"
    `;

    const values = [name, subject, email, contactNumber];

    const result = await pool.query(query, values);

    return result.rows[0];
}
