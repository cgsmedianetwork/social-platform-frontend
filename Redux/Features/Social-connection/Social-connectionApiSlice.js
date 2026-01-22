import { apiSlice } from "@/Redux/BaseApi/BaseApi";

export const socialConnectionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    connectYoutube: builder.mutation({
      query: (data) => {
        return {
          url: "/social-connection/youtube/connect",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    connectFacebook: builder.mutation({
      query: (data) => {
        return {
          url: "/social-connection/facebook/connect",
          method: "GET",
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

export const { useConnectYoutubeMutation, useConnectFacebookMutation, useGetListOfAccountsQuery } =
  socialConnectionApiSlice;
