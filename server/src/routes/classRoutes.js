import express from "express";
import { createClass, getClasses } from "../controllers/classController.js";
import { validate } from "../middleware/validate.js";
import { createClassSchema } from "../validators/classValidator.js";

const router = express.Router();

router.get("/", getClasses);
router.post("/", validate(createClassSchema), createClass);

export default router;
