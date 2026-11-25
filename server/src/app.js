import express from "express";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
    }),
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Education Admin API is running" });
});

export default app;
