import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Analytics01Icon,
  Calendar04Icon,
  Home04Icon,
  Settings01Icon,
  UserMultiple02Icon,
} from "hugeicons-react";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Assets/logo.webp";

const AdminLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      {/* sidebar */}
      <aside className="w-64  flex-shrink-0 flex flex-col border-r border-gray-200">
        {/* Top: Logo */}
        <div className="p-4 ">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-16" />
          </Link>
        </div>

        {/* Middle: Scrollable Menu */}
        <ScrollArea
          scrollHideDelay={400}
          className={"!flex-1 !overflow-y-auto"}
        >
          <nav className=" px-4 py-2 space-y-1">
            <Link
              href="/"
              className="flex items-center gap-2  px-3 py-2.5 rounded-md hover:bg-gray-100 transition-all duration-300 text-base font-medium"
            >
              <Home04Icon size={20} /> Home
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2  px-3 py-2.5 rounded-md hover:bg-gray-100 transition-all duration-300 text-base font-medium"
            >
              <Analytics01Icon size={20} /> Dashboard
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2  px-3 py-2.5 rounded-md hover:bg-gray-100 transition-all duration-300 text-base font-medium"
            >
              <UserMultiple02Icon size={20} /> Users
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2  px-3 py-2.5 rounded-md hover:bg-gray-100 transition-all duration-300 text-base font-medium"
            >
              <Calendar04Icon size={20} /> Schedule
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2  px-3 py-2.5 rounded-md hover:bg-gray-100 transition-all duration-300 text-base font-medium"
            >
              <UserIcon size={20} /> Sub-admin
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2  px-3 py-2.5 rounded-md hover:bg-gray-100 transition-all duration-300 text-base font-medium"
            >
              <Settings01Icon size={20} /> Settings
            </Link>
          </nav>
        </ScrollArea>

        {/* Bottom: Logout */}
        <div className="p-4 ">
          <button className="w-full py-2 px-4 rounded text-sm">Logout</button>
        </div>
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
