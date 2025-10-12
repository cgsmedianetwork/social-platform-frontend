import z from "zod";

export const SignupSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim()
    .toLowerCase(),
  phone: z
    .string({ required_error: "Phone number is required" })
    .min(11, { message: "Phone number must be at least 11 digits" })
    .trim(),
  password: z.string({ required_error: "Password is required" }).trim(),
  terms: z.boolean().optional(),
});
