import { NavData } from "@/Assets/data/NavData";
import ActiveSidebar from "@/components/ActiveSidebar/ActiveSidebar";
import AdminDashboardNavbar from "@/components/Navbar/AdminDashboardNavbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReduxProvider from "@/Redux/Provider/ReduxProvider";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Assets/logo.webp";

const AdminLayout = ({ children }) => {
  return (
    <ReduxProvider>
      <div className="w-full h-screen flex overflow-hidden">
        {/* sidebar */}
        <aside className="w-64  flex-shrink-0 flex flex-col border-r border-gray-200">
          {/* Top: Logo */}
          <div className="p-4 px-6 ">
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
              {NavData.map((item) => (
                <ActiveSidebar
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
            </nav>
          </ScrollArea>

          {/* Bottom: Logout */}
          <div className="p-4 ">
            <button className="w-full py-2 px-4 rounded text-sm">Logout</button>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto flex flex-col w-full bg-[#F9FBFB]">
          <AdminDashboardNavbar />
          {children}
        </main>
      </div>
    </ReduxProvider>
  );
};

export default AdminLayout;
