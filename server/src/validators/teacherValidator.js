import { z } from "zod";
import { SUBJECTS } from "../utils/constants.js";

export const createTeacherSchema = z.object({
    name: z.string().trim().min(1, "Name is required."),
    subject: z.enum(SUBJECTS, "Please select a valid subject."),
    email: z.email("This email address is invalid.").toLowerCase(),
    contactNumber: z
        .string()
        .min(1, "Work contact number is required.")
        .regex(/^\d{8}$/, "This work contact number is invalid."),
});
