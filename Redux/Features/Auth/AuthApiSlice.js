import { apiSlice } from "@/Redux/BaseApi/BaseApi";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUpInit: builder.mutation({
      query: (data) => {
        return {
          url: "/user/signup/init",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
    }),
  }),
});

export const { useSignUpInitMutation } = authApiSlice;
