const { default: z } = require("zod");

const BookingMeetingSchema = z.object({
  meetingWith: z
    .string({
      required_error: "Meeting with is required.",
      invalid_type_error: "Meeting with is required.",
    })
    .min(1, {
      message: "Meeting with is required.",
    }),
  date: z.date({ required_error: "Date is required." }),
  startTime: z.string().min(1, { message: "Start time is required." }),
  endTime: z.string().min(1, { message: "End time is required." }),
  description: z.string().optional(),
});

export default BookingMeetingSchema;
