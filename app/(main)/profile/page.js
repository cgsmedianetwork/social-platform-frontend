import CustomInput from "@/components/Inputs/CustomInput";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import {
  Facebook02Icon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "hugeicons-react";
import { Camera, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import logo from "../../../Assets/images/testimonial image.webp";

const page = () => {
  return (
    <div>
      <div className="w-full border-b border-[#EAECF0]">
        <DashboardNavbar />
      </div>
      <div className="custom-container mb-8">
        <label
          htmlFor="profile-picture"
          className="relative overflow-hidden w-28 h-28 my-8 rounded-full inline-block cursor-pointer group"
        >
          <Image
            src={logo}
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
        <form>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-neutral-900">
              Personal Information
            </h3>
            <button className="flex items-center gap-1 text-sm font-semibold border px-3 py-1.5 rounded-md text-neutral-600 cursor-pointer">
              <SquarePen size={16} /> Edit
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <CustomInput placeholder={"Mr. John Doe"} />
            <CustomInput placeholder={"01717171717"} />
          </div>
        </form>
        <div className="mt-6">
          <h2 className="text-base font-semibold text-neutral-900">
            Connect Account
          </h2>
          <p className="text-xs text-neutral-600 mt-1">
            Build trust with your network by connecting your social profiles
          </p>
          <div className="flex flex-col gap-4 mt-5 mb-5">
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-2 ">
                <Facebook02Icon size={18} strokeWidth={2.5} />
                Sign in with Facebook
              </button>
              <button className="text-sm px-3 py-1.5 flex items-center gap-1 border border-red-500 text-red-500 rounded-md font-semibold">
                <Trash2 size={16} /> Delete Link
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-gradient-to-r from-[#A43A96] via-[#EF3423] to-[#FED523] text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-2 ">
                <InstagramIcon size={18} strokeWidth={2.5} />
                Sign in with Instagram
              </button>
              <button className="text-sm px-3 py-1.5 flex items-center gap-1 border border-red-500 text-red-500 rounded-md font-semibold">
                <Trash2 size={16} /> Delete Link
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-black text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-5">
                <TiktokIcon size={18} strokeWidth={2.5} />
                Sign in with TikTok
              </button>
              <button className="text-sm px-3 py-1.5 flex items-center gap-1 border border-red-500 text-red-500 rounded-md font-semibold">
                <Trash2 size={16} /> Delete Link
              </button>
            </div>
            <div>
              <h1 className="text-base font-semibold text-neutral-900 mt-4">
                Other Profiles
              </h1>
              <p className="text-xs text-neutral-600 mt-1">
                Enter your profile link to add these social accounts to your
                profile
              </p>
              <div className="flex items-center gap-2 justify-between">
                <button className="bg-[#F04438] text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-2 mt-5">
                  <YoutubeIcon size={18} strokeWidth={2.5} />
                  Sign in with YouTube
                </button>
                <CustomInput placeholder={"Enter your link"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
