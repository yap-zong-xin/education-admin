import express from "express";

import { createTeacher } from "../controllers/teacherController.js";
import { validate } from "../middleware/validate.js";
import { createTeacherSchema } from "../validators/teacherValidator.js";

const router = express.Router();

router.post("/", validate(createTeacherSchema), createTeacher);

export default router;
