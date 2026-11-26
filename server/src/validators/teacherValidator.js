import { z } from "zod";
import { SUBJECTS } from "../utils/constants.js";

export const createTeacherSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Name is required.")
        .max(100, "Name must not exceed 100 characters."),
    subject: z.enum(SUBJECTS, "Please select a valid subject."),
    email: z
        .email("This email address is invalid.")
        .max(120, "Email address must not exceed 120 characters.")
        .toLowerCase(),
    contactNumber: z
        .string()
        .min(1, "Work contact number is required.")
        .regex(/^\d{8}$/, "This work contact number is invalid."),
});
