"use client";
import { useLogoutMutation } from "@/Redux/Features/Auth/AuthApiSlice";
import { logout as logoutAction } from "@/Redux/Features/Auth/AuthSlice";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { Logout05Icon, UserStoryIcon } from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import user from "../../Assets/images/testimonial image.webp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const DashboardProfileDropdown = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const toastId = toast.loading("Logging out...");
      await logout().unwrap();
      router.push("/");
      dispatch(logoutAction());
      toast.success("Logged out successfully!", { id: toastId });
    } catch (error) {
      toast.error("Failed to logout!", { id: toastId });
      console.log(error);
    }
  };
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <Image
          src={user}
          alt="user"
          className="w-8 h-8 rounded-full object-cover cursor-pointer "
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={"min-w-40"}>
        <DropdownMenuItem asChild>
          <Link
            href={"/profile"}
            className="cursor-pointer hover:!text-brand-700 group"
          >
            <UserStoryIcon
              size={16}
              strokeWidth={2}
              className="group-hover:!text-brand-700"
            />{" "}
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className="flex items-center gap-2 cursor-pointer group w-full"
          >
            <Logout05Icon
              size={16}
              strokeWidth={2}
              className="group-hover:!text-brand-700"
            />{" "}
            Logout
          </button>
        </DropdownMenuItem>
        <DropdownMenuArrow fill="var(--brand-600)" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardProfileDropdown;
