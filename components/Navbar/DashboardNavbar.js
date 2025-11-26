import { MessageCircle } from "lucide-react";
import Image from "next/image";
import user from "../../Assets/images/testimonial image.webp";
import logo from "../../Assets/logo.webp";
import ActiveLink from "./ActiveLink";

const DashboardNavbar = () => {
  return (
    <div className="custom-container py-2.5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-6">
        <Image src={logo} alt="logo" className="w-14" />
        {/* <Link href="/dashboard" className="text-sm ">
          Dashboard
        </Link> */}
        <ActiveLink href={"/dashboard"}>Dashboard</ActiveLink>
        <ActiveLink href={"/meeting-schedule"}>Meeting Schedule</ActiveLink>
      </div>
      <div className="flex items-center gap-5">
        <MessageCircle size={20} />
        <Image
          src={user}
          alt="user"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardNavbar;
