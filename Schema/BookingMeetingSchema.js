const { default: z } = require("zod");

const BookingMeetingSchema = z.object({
    meetingWith: z.string({
      required_error: "Meeting with is required.",
      invalid_type_error: "Meeting with is required.",
    }).min(1, {
      message: "Meeting with is required.",
    }),
    time: z
    .date()
    .optional()
    .refine((v) => v instanceof Date, {
      message: "A date and time is required.",
    }),
  });

  export default BookingMeetingSchema;