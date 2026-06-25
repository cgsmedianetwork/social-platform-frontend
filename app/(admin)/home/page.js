import DashboardCardforAdmin from "@/components/Cards/DashboardCardforAdmin";
import PerformanceTrend from "@/components/Cards/PerformanceTrend";
import TotalUser from "@/components/Cards/TotalUser";
import UserList from "@/components/Cards/UserList";

const page = () => {
  return (
    <section className="p-2.5 sm:p-4 sm:px-6 max-w-[1300px] xl:mx-auto w-full flex flex-col flex-1">
      <DashboardCardforAdmin />
      <div className="flex gap-4 my-4 flex-col lg:flex-row">
        <div className="w-full lg:w-[70%]">
          <PerformanceTrend />
        </div>
        <div className="w-full lg:flex-1">
          <TotalUser />
        </div>
      </div>
      <UserList />
    </section>
  );
};

export default page;
