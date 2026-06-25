import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../Assets/logo.webp";
import DashboardProfileDropdown from "../Dropdown/DashboardProfileDropdown";
import MobileDashboardMenu from "./MobileDashboardMenu";
import ProfileLink from "./ProfileLink";

const DashboardNavbar = () => {
  return (
    <div className="custom-container py-2.5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-5">
        <MobileDashboardMenu />
        <Link href={"/"} className="">
          <Image src={logo} alt="logo" className="w-12 sm:w-14" />
        </Link>

        <div className="hidden sm:block">
          <ProfileLink />
        </div>
      </div>
      <div className="flex items-center gap-5">
        {/* whatsapp chat button */}
        <a
          href="https://wa.me/01616678845"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <button className="">
            <MessageCircle size={20} />
          </button> */}
          <MessageCircle size={20} />
        </a>

        <DashboardProfileDropdown />
      </div>
    </div>
  );
};

export default DashboardNavbar;
