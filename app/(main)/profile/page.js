import ConnectSocialMedia from "@/components/ConnectSocialMedia/ConnectSocialMedia";
import CustomInput from "@/components/Inputs/CustomInput";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import { Camera, SquarePen } from "lucide-react";
import Image from "next/image";
import logo from "../../../Assets/images/testimonial image.webp";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full border-b border-[#EAECF0]">
        <DashboardNavbar />
      </div>
      <div className="custom-container mb-16">
        {/* form  */}
        <label
          htmlFor="profile-picture"
          className="relative overflow-hidden w-28 h-28 mt-8 mb-4 rounded-full inline-block cursor-pointer group"
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
            <h3 className="text-lg font-semibold text-neutral-900">
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

        {/* connect account section */}
        <ConnectSocialMedia />
      </div>
    </div>
  );
};

export default page;
