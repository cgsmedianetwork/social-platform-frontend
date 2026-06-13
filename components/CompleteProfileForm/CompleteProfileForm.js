"use client";

import logo from "@/Assets/images/user annony ous.webp";
import CustomInput from "@/components/Inputs/CustomInput";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { useUpdateProfileMutation } from "@/Redux/Features/Auth/AuthApiSlice";
import { setUser } from "@/Redux/Features/Auth/AuthSlice";
import { userProfileUpdateSchema } from "@/Schema/userProfileSchemaUpdate";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const CompleteProfileForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state?.auth);

  const [previewImage, setPreviewImage] = useState(user?.image || logo);
  const [profileUpdated, setProfileUpdated] = useState(false);

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const form = useForm({
    resolver: zodResolver(userProfileUpdateSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      image: undefined,
    },
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      const nameChanged = data?.name?.trim() !== (user?.name || "").trim();
      const emailChanged = data?.email?.trim() !== (user?.email || "").trim();
      const imageChanged = !!data?.image;
      if (!nameChanged && !emailChanged && !imageChanged) {
        toast.error("No changes found");
        return;
      }
      if (nameChanged) {
        formData.append("name", data.name);
      }
      if (emailChanged) {
        formData.append("email", data.email);
      }
      if (imageChanged) {
        formData.append("image", data.image);
      }
      const response = await updateProfile(formData).unwrap();
      if (response?.success) {
        dispatch(setUser({ user: response?.data?.result, token }));
        toast.success(response?.message || "Profile updated successfully!");
        setProfileUpdated(true);
      } else {
        toast.error(response?.message || "Failed to update profile!");
      }
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update profile!");
    }
  };
  return (
    <div className="bg-[#F9FBFB] max-w-lg mx-auto my-10 p-5 px-7 rounded-3xl">
      <h2 className="text-2xl text-neutral-950 font-medium text-center">
        Complete Your Profile
      </h2>

      <p className="text-sm text-neutral-500 mt-2">
        Add your profile information before going to the dashboard.
      </p>

      <Form {...form}>
        <form
          className="mt-6 flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-center">
                  <label
                    htmlFor="profile-image"
                    className="relative overflow-hidden w-24 h-24 rounded-full inline-block cursor-pointer group border"
                  >
                    <Image
                      src={previewImage}
                      alt="Profile image"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />

                    <span className="absolute bottom-0 bg-blue-600 h-6 z-20 left-0 right-0 flex items-center justify-center">
                      <Camera size={18} className="text-white" />
                    </span>

                    <input
                      id="profile-image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (!file) return;
                        const maxSize = 3 * 1024 * 1024; // 3MB
                        if (file.size > maxSize) {
                          toast.error("Image size must be less than 3MB");
                          event.target.value = "";
                          field.onChange(undefined);
                          return;
                        }
                        field.onChange(file);
                        setPreviewImage(URL.createObjectURL(file));
                      }}
                    />
                  </label>
                </div>

                <FormMessage
                  className={cn("text-red-500 text-xs text-center")}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  label="Name"
                  placeholder="Enter your name"
                  disabled={isLoading}
                  {...field}
                />
                <FormMessage className={cn("ml-1 text-xs text-red-500")} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  disabled={isLoading}
                  {...field}
                />
                <FormMessage className={cn("ml-1 text-xs text-red-500")} />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-brand-500 rounded-md text-neutral-950 font-semibold cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Spinner /> Updating...
              </span>
            ) : (
              "Update Profile"
            )}
          </button>

          {/* {profileUpdated && ( */}
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="w-full py-3 bg-neutral-300 hover:bg-neutral-400 transition-all duration-300 rounded-md text-neutral-600 hover:text-neutral-900 font-medium cursor-pointer"
          >
            Go to Dashboard
          </button>
          {/* )}     */}
        </form>
      </Form>
    </div>
  );
};

export default CompleteProfileForm;
