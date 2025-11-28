import { MessageCircle, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import user from "../../Assets/images/testimonial image.webp";

const AdminDashboardNavbar = () => {
  return (
    <nav className="py-2.5 flex justify-end items-end w-full px-5 border-b border-neutral-200">
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-sm font-medium text-neutral-700 px-3 py-2 border border-neutral-200 rounded-md hover:bg-gray-100 transition-all duration-300 cursor-pointer">
          <Plus size={20} /> Schedule Request
        </button>
        <MessageCircle size={20} />
        <Link href={"/profile"}>
          <Image
            src={user}
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
        </Link>
      </div>
    </nav>
  );
};

export default AdminDashboardNavbar;
