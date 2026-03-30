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
  }),
});

export const { useGetAnalyticsDataQuery } = analyticsApiSlice;
