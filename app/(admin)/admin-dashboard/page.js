import AdminAnalytics from "@/components/AdminAnalytics/AdminAnalytics";
import DashboardCardforAdmin from "@/components/Cards/DashboardCardforAdmin";

const AdminDashboardPage = () => {
  return (
    <div className="p-2.5 sm:p-4 sm:px-6 max-w-[1200px] xl:mx-auto w-full flex-1 pb-10">
      <DashboardCardforAdmin />
      <AdminAnalytics />
    </div>
  );
};

export default AdminDashboardPage;
