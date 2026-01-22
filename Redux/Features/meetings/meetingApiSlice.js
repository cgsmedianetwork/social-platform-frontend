import { apiSlice } from "@/Redux/BaseApi/BaseApi";

export const meetingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMeeting: builder.mutation({
      query: (data) => {
        return {
          url: "/meeting-bookings/create",
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { useCreateMeetingMutation } = meetingApiSlice;
