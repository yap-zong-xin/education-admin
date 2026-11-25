import express from "express";
import cors from "cors";

import teacherRoutes from "./routes/teacherRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Education Admin API is running",
    });
});

app.use("/api/teachers", teacherRoutes);

app.use(errorHandler);

export default app;
