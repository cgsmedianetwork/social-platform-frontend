import { MessageCircle, Plus } from "lucide-react";
import Link from "next/link";
import DashboardProfileDropdown from "../Dropdown/DashboardProfileDropdown";
import MobileDashboardMenu from "./MobileDashboardMenu";

const AdminDashboardNavbar = () => {
  return (
    <nav className="py-2.5 flex justify-between items-center md:justify-end w-full px-3 sm:px-6 md:px-10 border-b border-neutral-200 sticky top-0 bg-white z-10">
      <MobileDashboardMenu />
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        <Link href={"/schedule"}>
          <button className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-neutral-700 px-2 sm:px-3 py-1 sm:py-2 border border-neutral-200 rounded-md hover:bg-gray-100 transition-all duration-300 cursor-pointer">
            <Plus className="size-4 sm:size-5" /> Meeting Schedule
          </button>
        </Link>
        <a
          href="https://wa.me/01616678845"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} />
        </a>

        <DashboardProfileDropdown />
      </div>
    </nav>
  );
};

export default AdminDashboardNavbar;
