"use client";
import { useUpdateProfileMutation } from "@/Redux/Features/Auth/AuthApiSlice";
import { setUser } from "@/Redux/Features/Auth/AuthSlice";
import { userProfileUpdateSchema } from "@/Schema/userProfileSchemaUpdate";
import { zodResolver } from "@hookform/resolvers/zod";
import { Call02Icon, Mail02Icon } from "hugeicons-react";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import logo from "../../Assets/images/user annony ous.webp";
import { Form } from "../ui/form";
import { Spinner } from "../ui/spinner";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const { user, token } = useSelector((state) => state?.auth);
  // console.log(user);
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateProfileMutation();
  const form = useForm({
    resolver: zodResolver(userProfileUpdateSchema),
  });

  const handleProfileImage = async (file) => {
    // console.log(file);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await updateProfile(formData).unwrap();
      console.log(response);
      if (response?.success) {
        dispatch(setUser({ user: response?.data?.result, token: token }));
        toast.success(response?.message || "Profile updated successfully!");
      } else {
        toast.error(response?.message || "Failed to update profile!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form className="flex flex-col items-center gap-4 py-8">
          <div className="relative">
            <label
              htmlFor="profile-picture"
              className="relative overflow-hidden w-24 h-24 rounded-full inline-block cursor-pointer group border"
            >
              <Image
                src={user?.image || logo}
                alt="logo"
                width={96}
                height={96}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
              <label
                htmlFor="profile-picture"
                className="absolute bottom-0 bg-blue-600 h-5 z-20 left-0 right-0 flex items-center justify-center cursor-pointer"
              >
                <Camera size={18} className="text-white" />
              </label>
              <input
                type="file"
                id="profile-picture"
                className="hidden"
                onChange={(e) => handleProfileImage(e.target.files[0])}
                accept="image/*"
              />
            </label>
            {isUpdateProfileLoading && (
              <div className="absolute w-24 h-24 inset-0 bg-black/20 z-30 rounded-full flex items-center justify-center">
                <Spinner className="size-6 text-white" />
              </div>
            )}
          </div>
          {user && <div>
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
          </div>}
        </form>
      </Form>
    </div>
  );
};

export default ProfileHeader;
