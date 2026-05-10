import { apiSlice } from "@/Redux/BaseApi/BaseApi";

export const socialConnectionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    connectYoutube: builder.mutation({
      query: () => {
        return {
          url: "/social-connection/youtube/connect",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["socialConnection"],
    }),
    connectFacebook: builder.mutation({
      query: () => {
        return {
          url: "/social-connection/facebook/connect",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["socialConnection"],
    }),
    connectInstagram: builder.mutation({
      query: () => {
        return {
          url: "/social-connection/instagram/connect",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["socialConnection"],
    }),
    connectTiktok: builder.mutation({
      query: () => {
        return {
          url: "/social-connection/tiktok/connect",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["socialConnection"],
    }),
    getListOfAccounts: builder.query({
      query: () => {
        return {
          url: "/social-connection/list-of-accounts",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      providesTags: ["socialConnection"],
    }),
    getReachLikeCommentLastTwoMonthsData: builder.query({
      query: () => {
        return {
          url: "/social-connection/reach-like-comment-last-two-months-data",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      providesTags: ["socialConnection"],
    }),
    getLast12MonthsChartData: builder.query({
      query: () => {
        return {
          url: "/social-connection/last-12-months-chart-data",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      providesTags: ["socialConnection"],
    }),
    getFollowersLast12Months: builder.query({
      query: () => {
        return {
          url: "/social-connection/followers-per-account",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      providesTags: ["socialConnection"],
    }),
    getTotalFollowersByAccount: builder.query({
      query: () => {
        return {
          url: "/social-connection/total-followers-by-account",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      providesTags: ["socialConnection"],
    }),
    disconnectSocialAccount: builder.mutation({
      query: ({ provider, providerId }) => {
        return {
          url: `/social-connection/disconnect-account/${provider}/${
            providerId
          }`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["socialConnection"],
    }),
  }),
});

export const {
  useConnectYoutubeMutation,
  useConnectFacebookMutation,
  useConnectInstagramMutation,
  useGetListOfAccountsQuery,
  useConnectTiktokMutation,
  useGetReachLikeCommentLastTwoMonthsDataQuery,
  useGetLast12MonthsChartDataQuery,
  useGetFollowersLast12MonthsQuery,
  useDisconnectSocialAccountMutation,
  useGetTotalFollowersByAccountQuery,
} = socialConnectionApiSlice;
