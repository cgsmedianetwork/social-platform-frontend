"use server";

import { cookies } from "next/headers";

// The backend sets its cookies on the backend domain. A browser never sends
// those cookies to the frontend domain, so the middleware cannot read them.
// These actions copy the tokens onto the frontend domain, where the
// middleware looks for them.

const isProduction = process.env.NODE_ENV === "production";

const baseOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: "lax",
  path: "/",
};

export const setAuthCookies = async ({ accessToken, refreshToken }) => {
  const cookieStore = await cookies();

  if (accessToken) {
    cookieStore.set("accessToken", accessToken, {
      ...baseOptions,
      maxAge: 60 * 60 * 24, // one day
    });
  }

  if (refreshToken) {
    cookieStore.set("refreshToken", refreshToken, {
      ...baseOptions,
      maxAge: 60 * 60 * 24 * 30, // thirty days
    });
  }

  return { success: true };
};

export const clearAuthCookies = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  return { success: true };
};
