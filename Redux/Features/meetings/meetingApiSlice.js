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
      invalidatesTags: ["MeetingBookings"],
    }),

    getUserMeetingBookings: builder.query({
      query: ({ startDate, endDate }) => ({
        url: `/meeting-bookings/user-meeting-bookings?startDate=${startDate}&endDate=${endDate}`,
        method: "GET",
      }),
      providesTags: ["MeetingBookings"],
    }),
  }),
});

export const { useCreateMeetingMutation, useGetUserMeetingBookingsQuery } =
  meetingApiSlice;
