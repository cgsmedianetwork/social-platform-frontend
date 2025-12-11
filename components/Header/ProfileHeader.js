"use client";
import { Call02Icon, Mail02Icon } from "hugeicons-react";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import logo from "../../Assets/images/user annony ous.webp";

const ProfileHeader = () => {
  const { user } = useSelector((state) => state?.auth);
  //   console.log(user);
  return (
    <div className="">
      <div className="flex flex-col items-center gap-4 py-8">
        <label
          htmlFor="profile-picture"
          className="relative overflow-hidden w-24 h-24 rounded-full inline-block cursor-pointer group border"
        >
          <Image
            src={user?.image || logo}
            alt="logo"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          />
          <label
            htmlFor="profile-picture"
            className="absolute bottom-0 bg-blue-600 h-7 z-20 left-0 right-0 flex items-center justify-center cursor-pointer"
          >
            <Camera size={18} className="text-white" />
          </label>
          <input type="file" id="profile-picture" className="hidden" />
        </label>
        <div>
          <h1 className="text-2xl font-semibold text-neutral-600 capitalize text-center">
            {user?.name}
          </h1>
          {user?.email && (
            <p className="text-sm text-neutral-600 flex items-center justify-center gap-1 mt-1 text-center">
              <Mail02Icon size={16} /> {user?.email}
            </p>
          )}
          {user?.phone && (
            <p className="text-sm text-neutral-600 flex items-center justify-center gap-1 text-center">
              <Call02Icon size={16} /> {user?.phone}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
