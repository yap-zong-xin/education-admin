import { z } from "zod";
import { CLASS_LEVELS } from "../utils/constants.js";

export const createClassSchema = z.object({
    level: z.enum(CLASS_LEVELS, "Please select a valid class level."),

    name: z
        .string()
        .trim()
        .min(1, "Class name is required.")
        .max(100, "Class name must not exceed 100 characters."),

    teacherEmail: z
        .email("This teacher email address is invalid.")
        .max(120, "Email address must not exceed 120 characters.")
        .toLowerCase(),
});
