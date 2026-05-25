const { default: z } = require("zod");

const AdminBookingSchema = z.object({
  userId: z
    .string({
      required_error: "User ID is required.",
      invalid_type_error: "User ID is required.",
    })
    .min(1, {
      message: "User ID is required.",
    }),
  date: z.date({ required_error: "Date is required." }),
  startTime: z.string().min(1, { message: "Start time is required." }),
  endTime: z.string().min(1, { message: "End time is required." }),
  status: z.string().optional(),
  description: z.string().optional(),
});

export default AdminBookingSchema;
