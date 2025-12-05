import z from "zod";

export const LoginSchema = z.object({
  phone: z
    .string({ required_error: "Phone is required" })
    .min(11, { message: "Phone must be at least 11 characters" })
    .max(11, { message: "Phone must be at most 11 characters" })
    .trim(),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least 4 characters" })
    .trim(),
  remember: z.boolean().optional(),
});
