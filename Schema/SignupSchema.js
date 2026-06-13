import z from "zod";

export const SignupSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Invalid email address" })
    .optional()
    .or(z.literal(""))
    .transform((value) => value || undefined),
  phone: z
    .string({ required_error: "Phone number is required" })
    .min(11, { message: "Phone number must be at least 11 digits" })
    .trim(),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least 4 characters" })
    .trim(),
  terms: z.boolean().optional(),
});
