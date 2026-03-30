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
  }),
});

export const {
  useConnectYoutubeMutation,
  useConnectFacebookMutation,
  useConnectInstagramMutation,
  useGetListOfAccountsQuery,
  useConnectTiktokMutation,
  useGetReachLikeCommentLastTwoMonthsDataQuery,
} = socialConnectionApiSlice;
