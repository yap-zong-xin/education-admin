import "dotenv/config";
import pg from "pg";
import fs from "node:fs";

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: 10000,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync(
            new URL("../../certs/supabase-ca.crt", import.meta.url),
            "utf8",
        ),
    },
});

pool.on("error", (error) => {
    console.error("Unexpected PostgreSQL pool error:", error);
});

export default pool;
