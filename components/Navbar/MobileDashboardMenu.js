"use client";
import { NavData } from "@/Assets/data/NavData";
import { cn } from "@/lib/utils";
import { Cancel01Icon, Menu02Icon } from "hugeicons-react";
import { CalendarDays, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const userNavData = [
  {
    icon: <LayoutDashboard size={20} strokeWidth={1.8} opacity={0.8} />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <CalendarDays size={20} strokeWidth={1.8} opacity={0.8} />,
    label: "Booking Schedule",
    href: "/booking-schedule",
  },
];

const MobileDashboardMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useSelector((state) => state.auth);
  const isAdminUser = user?.role === "admin" || user?.role === "subAdmin";
  const menuItems = isAdminUser ? NavData : userNavData;
  return (
    <Drawer
      direction="left"
      open={isOpen}
      onOpenChange={setIsOpen}
      noBodyStyles
    >
      <DrawerTrigger asChild>
        <button
          type="button"
          className="md:hidden hover:bg-slate-700/15 rounded-md cursor-pointer p-1"
        >
          <Menu02Icon size={24} strokeWidth={1.8} className="cursor-pointer" />
        </button>
      </DrawerTrigger>
      <DrawerContent className={cn("bg-slate-50 p-3 max-w-2xs")}>
        <DrawerTitle className={cn("hidden")}></DrawerTitle>
        <div className="px-2 flex">
          <DrawerClose asChild>
            <button type="button" className="bg-slate-200 p-1 rounded-md">
              <Cancel01Icon size={20} strokeWidth={2} />
            </button>
          </DrawerClose>
        </div>
        <nav className="flex flex-col gap-1 mt-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <DrawerClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2.5 rounded-md hover:bg-gray-100 transition-all duration-300 text-base font-medium text-neutral-700",
                    isActive && "bg-gray-100 text-neutral-900",
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </DrawerClose>
            );
          })}
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDashboardMenu;
