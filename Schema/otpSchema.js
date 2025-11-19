import z from "zod";

export const otpSchema = z.object({
  otpCode: z
    .string({ required_error: "OTP code is required" })
    .min(4, { message: "OTP code must be 4 digits" })
    .max(4, { message: "OTP code must be 4 digits" })
    .regex(/^\d{4}$/, { message: "OTP code must be 4 digits" }),
});
