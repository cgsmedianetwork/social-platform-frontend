"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useRedirectingHelper = () => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (user?.role === "admin") {
        router.push("/home");
      } else if (user?.role === "user") {
        router.push("/dashboard");
      }
    }
  }, [user, router]);
};
