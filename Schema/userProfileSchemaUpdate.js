import z from "zod";

//phone is optional
export const userProfileUpdateSchema = z.object({
  phone: z
    .string()
    .min(11, { message: "Phone must be at least 11 characters" })
    .trim()
    .optional(),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .trim()
    .trim()
    .optional(),
  name: z.string().trim().optional(),
  image: z.instanceof(File).optional(),
});
