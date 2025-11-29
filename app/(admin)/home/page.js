import DashboardCardforAdmin from "@/components/Cards/DashboardCardforAdmin";
import PerformanceTrend from "@/components/Cards/PerformanceTrend";
import UserList from "@/components/Cards/UserList";

const page = () => {
  return (
    <section className="p-4 px-6 bg-[#F9FBFB] flex flex-col h-full pb-8">
      <DashboardCardforAdmin />
      <div className="flex gap-4 my-4 ">
        <div className="w-[70%]">
          <PerformanceTrend />
        </div>
        <div className="flex-1">
          <UserList />
        </div>
      </div>
    </section>
  );
};

export default page;
