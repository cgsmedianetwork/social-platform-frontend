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

    createAdminMeeting: builder.mutation({
      query: (data) => ({
        url: "/meeting-bookings/admin/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MeetingBookings"],
    }),

    getUserMeetingBookings: builder.query({
      query: ({ startDate, endDate }) => ({
        url: `/meeting-bookings/user-meeting-bookings?startDate=${startDate}&endDate=${endDate}`,
        method: "GET",
      }),
      providesTags: ["MeetingBookings"],
    }),

    getAdminMeetingBookings: builder.query({
      query: ({ startDate, endDate }) => ({
        url: "/meeting-bookings/admin/bookings",
        method: "GET",
        params: { startDate, endDate },
      }),
      providesTags: ["MeetingBookings"],
    }),

    updateMeetingStatus: builder.mutation({
      query: ({ bookingId, status }) => ({
        url: `/meeting-bookings/admin/${bookingId}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["MeetingBookings"],
    }),
  }),
});

export const {
  useCreateMeetingMutation,
  useGetUserMeetingBookingsQuery,
  useCreateAdminMeetingMutation,
  useGetAdminMeetingBookingsQuery,
  useUpdateMeetingStatusMutation,
} = meetingApiSlice;
