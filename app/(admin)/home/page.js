import DashboardCardforAdmin from "@/components/Cards/DashboardCardforAdmin";
import PerformanceTrend from "@/components/Cards/PerformanceTrend";
import TotalUser from "@/components/Cards/TotalUser";
import UserList from "@/components/Cards/UserList";

const page = () => {
  return (
    <section className="p-4 px-6 bg-[#F9FBFB] flex flex-col flex-1">
      <DashboardCardforAdmin />
      <div className="flex gap-4 my-4 ">
        <div className="w-[70%]">
          <PerformanceTrend />
        </div>
        <div className="flex-1">
          <TotalUser />
        </div>
      </div>
      <UserList />
    </section>
  );
};

export default page;
