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
    }),

    getListOfAccounts: builder.query({
      query: () =>{
        return {
          url: "/social-connection/list-of-accounts",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      },
      providesTags: ["socialConnection"],
    })
    
  }),
});

export const { useConnectYoutubeMutation, useConnectFacebookMutation, useConnectInstagramMutation, useGetListOfAccountsQuery , useConnectTiktokMutation} =
  socialConnectionApiSlice;
