import { Link02Icon } from "hugeicons-react";
import Link from "next/link";
import RequestMeeting from "../RequestMeeting/RequestMeeting";
import WelcomeHeader from "./WelcomeHeader";

const DashboardHeader = () => {
  return (
    <div className="border-b border-[#EAECF0]">
      <div className="custom-container py-3 flex items-center justify-between gap-3">
        <WelcomeHeader />
        <div className="flex items-center gap-2">
          <RequestMeeting />
          <Link href={"/profile"} className="cursor-pointer">
            <button className="border text-xs sm:text-sm sm:border-2 border-brand-500 bg-brand-500 flex items-center gap-1 px-1.5 sm:px-3 py-1.5 sm:py-1.5 font-semibold rounded-md cursor-pointer">
              <Link02Icon strokeWidth={2} className="size-3 sm:size-4" /> Add
              profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
