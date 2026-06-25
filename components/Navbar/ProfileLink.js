"use client";

import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import ActiveLink from "./ActiveLink";

const ProfileLink = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  return (
    <div className="flex items-center gap-5">
      {(user?.role === "admin" || user?.role === "subAdmin") && (
        <ActiveLink href="/home">Home</ActiveLink>
      )}
      <ActiveLink
        href={cn(
          user?.role === "admin" || user?.role === "subAdmin"
            ? "/admin-dashboard"
            : "/dashboard",
        )}
      >
        Dashboard
      </ActiveLink>
      <ActiveLink
        href={cn(
          user?.role === "admin" || user?.role === "subAdmin"
            ? "/schedule"
            : "/booking-schedule",
        )}
      >
        Booking Schedule
      </ActiveLink>
    </div>
  );
};

export default ProfileLink;
