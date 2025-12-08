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
  }),
});

export const { useConnectYoutubeMutation } = socialConnectionApiSlice;
