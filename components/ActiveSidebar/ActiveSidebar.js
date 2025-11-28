"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveSidebar = ({ href, icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  //   console.log(isActive);
  return (
    <Link
      href={href}
      key={href}
      className={cn(
        "flex items-center gap-2  px-3 py-2.5 rounded-md hover:bg-gray-100 transition-all duration-300 text-base font-medium text-neutral-700",
        isActive && "bg-gray-100 text-neutral-900"
      )}
    >
      {icon} {label}
    </Link>
  );
};

export default ActiveSidebar;
