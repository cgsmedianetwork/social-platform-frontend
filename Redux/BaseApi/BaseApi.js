import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setUser } from "../Features/Auth/AuthSlice";
const BASE_API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // console.log(result);

  if (result?.error?.status === 401) {
    const res = await fetch(`${BASE_API_URL}/user/refresh-token`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    // console.log(data);

    if (data?.data?.result?.accessToken) {
      const user = api.getState()?.auth?.user;

      api.dispatch(setUser({ user, token: data?.data?.result?.accessToken }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["auth", "adminAndSubAdmin", "socialConnection", "MeetingBookings"],
  endpoints: (builder) => ({}),
});
