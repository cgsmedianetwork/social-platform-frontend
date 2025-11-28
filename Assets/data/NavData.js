import {
  Analytics01Icon,
  Calendar04Icon,
  Home04Icon,
  Settings01Icon,
  UserMultiple02Icon,
} from "hugeicons-react";
import { UserIcon } from "lucide-react";

export const NavData = [
  {
    icon: <Home04Icon size={20} strokeWidth={1.8} opacity={0.8} />,
    label: "Home",
    href: "/home",
  },
  {
    icon: <Analytics01Icon size={20} strokeWidth={1.8} opacity={0.8} />,
    label: "Dashboard",
    href: "/admin-dashboard",
  },
  {
    icon: <UserMultiple02Icon size={20} strokeWidth={1.8} opacity={0.8} />,
    label: "Users",
    href: "/users",
  },
  {
    icon: <Calendar04Icon size={20} strokeWidth={1.8} opacity={0.8} />,
    label: "Schedule",
    href: "/schedule",
  },
  {
    icon: <UserIcon size={20} strokeWidth={1.8} opacity={0.8} />,
    label: "Sub-admin",
    href: "/sub-admin",
  },
  {
    icon: <Settings01Icon size={20} strokeWidth={1.8} opacity={0.8} />,
    label: "Settings",
    href: "/settings",
  },
];
