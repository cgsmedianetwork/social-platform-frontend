"use client";
import { useUpdateProfileMutation } from "@/Redux/Features/Auth/AuthApiSlice";
import { setUser } from "@/Redux/Features/Auth/AuthSlice";
import { userProfileUpdateSchema } from "@/Schema/userProfileSchemaUpdate";
import { zodResolver } from "@hookform/resolvers/zod";
import { Call02Icon, Mail02Icon } from "hugeicons-react";
import { Camera, Check, Pencil, X } from "lucide-react";
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
  const [isEditing, setIsEditing] = useState(false);
  const { user, token } = useSelector((state) => state?.auth);
  const [profileInfo, setProfileInfo] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });
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

  const handleProfileInfoUpdate = async () => {
    try {
      const response = await updateProfile(profileInfo).unwrap();

      if (response?.success) {
        dispatch(setUser({ user: response?.data?.result, token }));
        toast.success(response?.message || "Profile updated successfully!");
        setIsEditing(false);
      } else {
        toast.error(response?.message || "Failed to update profile!");
      }
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update profile!");
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form className="flex flex-col items-center gap-4 py-8">
          {/* image showing  */}
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
          {/* {user && (
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
          )} */}
          {user && (
            <div className="text-center">
              {isEditing ? (
                <div className="flex flex-col items-center gap-2">
                  <input
                    value={profileInfo.name}
                    disabled={isUpdateProfileLoading}
                    onChange={(event) =>
                      setProfileInfo((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                    className="border rounded-md px-3 py-2 text-center"
                    placeholder="Name"
                  />

                  <input
                    value={profileInfo.email}
                    onChange={(event) =>
                      setProfileInfo((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                    disabled={isUpdateProfileLoading}
                    className="border rounded-md px-3 py-2 text-center"
                    placeholder="Email"
                    type="email"
                  />

                  <div className="flex items-center gap-2 mb-2">
                    <button
                      type="button"
                      onClick={handleProfileInfoUpdate}
                      disabled={isUpdateProfileLoading}
                      className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm disabled:opacity-50 cursor-pointer"
                    >
                      <Check size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setProfileInfo({
                          name: user?.name || "",
                          email: user?.email || "",
                        });
                        setIsEditing(false);
                      }}
                      className="px-3 py-1 rounded-md border text-sm cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-center gap-2">
                    <h1 className="text-2xl font-semibold text-neutral-600 capitalize text-center">
                      {user?.name}
                    </h1>

                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
                    >
                      <Pencil size={16} />
                    </button>
                  </div>

                  {user?.email && (
                    <p className="text-sm text-neutral-600 flex items-center justify-center gap-1 mt-1 text-center">
                      <Mail02Icon size={16} /> {user?.email}
                    </p>
                  )}
                </>
              )}

              {user?.phone && (
                <p className="text-sm text-neutral-600 flex items-center justify-center gap-1 text-center">
                  <Call02Icon size={16} /> {user?.phone}
                </p>
              )}
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ProfileHeader;
