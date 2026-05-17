// get analytics data

import { apiSlice } from "@/Redux/BaseApi/BaseApi";

export const analyticsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAnalyticsData: builder.query({
      query: () => {
        return {
          url: "/analytics",
          method: "GET",
        };
      },
    }),

    getAdminAccountAnalytics: builder.query({
      query: (userId) => ({
        url: `/analytics/accounts${userId ? `?userId=${userId}` : ""}`,
        method: "GET",
      }),
      providesTags: ["adminAnalytics"],
    }),

    refreshAdminAccountAnalytics: builder.mutation({
      query: (userId) => ({
        url: `/analytics/accounts/refresh${userId ? `?userId=${userId}` : ""}`,
        method: "POST",
      }),
      invalidatesTags: ["adminAnalytics"],
    }),
  }),
});

export const {
  useGetAnalyticsDataQuery,
  useGetAdminAccountAnalyticsQuery,
  useRefreshAdminAccountAnalyticsMutation,
} = analyticsApiSlice;
