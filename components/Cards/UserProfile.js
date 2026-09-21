"use client";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/Assets/svgs/socialIcons";
import { useGetAdminUserDetailsQuery } from "@/Redux/Features/Auth/AuthApiSlice";
import { Location01Icon } from "hugeicons-react";
import Image from "next/image";
import profile from "../../Assets/images/user annony ous.webp";
import { Skeleton } from "../ui/skeleton";

const providerIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YoutubeIcon,
};

const formatBadge = (badge) => {
  if (!badge) return "No Badge";
  return badge.charAt(0).toUpperCase() + badge.slice(1);
};

const UserProfileSkeleton = () => (
  <div className="flex gap-4">
    <Skeleton className="w-14 h-14 rounded-full shrink-0" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-3 w-32" />
      <Skeleton className="h-3 w-56" />
      <div className="flex gap-2 mt-2">
        <Skeleton className="h-5 w-5 rounded-full" />
        <Skeleton className="h-5 w-5 rounded-full" />
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>
    </div>
  </div>
);

const UserProfile = ({ id }) => {
  const { data, isLoading, isFetching, isError } = useGetAdminUserDetailsQuery(
    id,
    {
      skip: !id,
    },
  );

  const user = data?.data;
  console.log(user);
  return (
    <div className="flex gap-4">
      <div className="w-14 h-14 rounded-full overflow-hidden">
        <Image
          src={user?.image || profile}
          alt="profile"
          width={50}
          height={50}
          className="border rounded-full w-full h-full object-cover "
        />
      </div>
      <div>
        <div>
          <h1 className="text-lg font-medium -mt-1">{user?.name}</h1>
        </div>
        <div className="flex items-center gap-1">
          <Location01Icon
            size={14}
            strokeWidth={2}
            className="text-neutral-500"
          />{" "}
          <span className="text-xs text-neutral-500 font-medium">
            Dhaka, Bangladesh
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-xs  text-neutral-500 font-medium">
            User ID: 1234567890
          </p>{" "}
          <div className="border h-3 border-slate-400"></div>{" "}
          <div className="text-xs text-neutral-500 font-medium">Influencer</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
