"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  console.log(isActive);
  return (
    <Link
      href={href}
      className={`text-sm  ${
        isActive
          ? "text-black bg-neutral-100 font-medium px-3 py-1.5 rounded-md"
          : "text-neutral-900"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
