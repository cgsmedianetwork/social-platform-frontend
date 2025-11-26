import { Link02Icon } from "hugeicons-react";
import { Plus } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="border-b border-[#EAECF0]">
      <div className="custom-container py-3 flex items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold text-neutral-900">
          Welcome back, John
        </h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 border-2 border-brand-500 rounded-md text-sm font-semibold">
            <Plus size={18} strokeWidth={2.5} /> Request a Meeting
          </button>
          <button className="border-2 border-brand-500 bg-brand-500 flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-md">
            <Link02Icon size={20} strokeWidth={2} /> Add profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
