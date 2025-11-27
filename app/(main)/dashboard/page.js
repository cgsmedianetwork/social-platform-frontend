import DashboardCard from "@/components/Cards/DashboardCard";
import ProfilePerformance from "@/components/Cards/ProfilePerformance";
import DashboardHeader from "@/components/Header/DashboardHeader";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";

export default function DashboardPage() {
  return (
    <div className="w-full">
      <div className="w-full border-b border-[#EAECF0]">
        <DashboardNavbar />
      </div>
      <DashboardHeader />
      <div className="w-full custom-container">
        <DashboardCard />
        <ProfilePerformance />
      </div>
    </div>
  );
}
