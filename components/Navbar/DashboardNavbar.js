import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../Assets/logo.webp";
import DashboardProfileDropdown from "../Dropdown/DashboardProfileDropdown";
import ActiveLink from "./ActiveLink";

const DashboardNavbar = () => {
  return (
    <div className="custom-container py-2.5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-14" />
        </Link>
        {/* <Link href="/dashboard" className="text-sm ">
          Dashboard
        </Link> */}
        <ActiveLink href={"/dashboard"}>Dashboard</ActiveLink>
        <ActiveLink href={"/meeting-schedule"}>Meeting Schedule</ActiveLink>
      </div>
      <div className="flex items-center gap-5">
        <MessageCircle size={20} />
        <DashboardProfileDropdown />
      </div>
    </div>
  );
};

export default DashboardNavbar;
