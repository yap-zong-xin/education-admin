import express from "express";
import { createClass } from "../controllers/classController.js";
import { validate } from "../middleware/validate.js";
import { createClassSchema } from "../validators/classValidator.js";

const router = express.Router();

router.post("/", validate(createClassSchema), createClass);

export default router;
