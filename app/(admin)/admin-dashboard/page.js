import AnalyticsReportCard from "@/components/Cards/AnalyticsReportCard";
import DashboardCardforAdmin from "@/components/Cards/DashboardCardforAdmin";

const AdminDashboardPage = () => {
  return (
    <div className="p-4 px-6 pb-10">
      <DashboardCardforAdmin />
      <div className="mt-5">
        <h1 className="text-lg font-medium">Analytics Report</h1>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <AnalyticsReportCard />
          <AnalyticsReportCard />
          <AnalyticsReportCard />
          <AnalyticsReportCard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
