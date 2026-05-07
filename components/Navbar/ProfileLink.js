"use client";

import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import ActiveLink from "./ActiveLink";

const ProfileLink = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  return (
    <>
      <ActiveLink
        href={cn(
          user?.role === "admin" || user?.role === "moderator"
            ? "/admin-dashboard"
            : "/dashboard",
        )}
      >
        Dashboard
      </ActiveLink>
      <ActiveLink
        href={cn(
          user?.role === "admin" || user?.role === "moderator"
            ? "/schedule"
            : "/booking-schedule",
        )}
      >
        Booking Schedule
      </ActiveLink>
    </>
  );
};

export default ProfileLink;
