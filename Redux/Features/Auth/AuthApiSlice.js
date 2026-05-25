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
    resendSignUpOTP: builder.mutation({
      query: (data) => {
        return {
          url: "/user/signup/resend-otp",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
    }),
    verifySignUpOTP: builder.mutation({
      query: (data) => {
        return {
          url: "/user/verify-otp",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
    }),
    login: builder.mutation({
      query: (data) => {
        return {
          url: "/user/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: "/user/logout",
          method: "POST",
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: "/user/update-user",
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["auth"],
    }),
    getAdminAndSubAdmin: builder.query({
      query: () => {
        return {
          url: "/user/admin-and-subadmin",
          method: "GET",
        };
      },
      providesTags: ["adminAndSubAdmin"],
    }),
    getTotalUserSummary: builder.query({
      query: () => ({
        url: "/user/total-user-summary",
        method: "GET",
      }),
    }),
    getAdminUserList: builder.query({
      query: ({
        searchTerm = "",
        badge = "all",
        page = 1,
        limit = 10,
      } = {}) => ({
        url: "/user/admin-user-list",
        method: "GET",
        params: { searchTerm, badge, page, limit },
      }),
      providesTags: ["auth"],
    }),
    updateUserBadge: builder.mutation({
      query: ({ userId, badge }) => ({
        url: `/user/${userId}/badge`,
        method: "PATCH",
        body: { badge },
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useSignUpInitMutation,
  useResendSignUpOTPMutation,
  useVerifySignUpOTPMutation,
  useLogoutMutation,
  useLoginMutation,
  useUpdateProfileMutation,
  useGetAdminAndSubAdminQuery,
  useGetTotalUserSummaryQuery,
  useGetAdminUserListQuery,
  useUpdateUserBadgeMutation,
} = authApiSlice;
