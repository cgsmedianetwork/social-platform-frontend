import AdminAnalytics from "@/components/AdminAnalytics/AdminAnalytics";
import DashboardCardforAdmin from "@/components/Cards/DashboardCardforAdmin";

const AdminDashboardPage = () => {
  return (
    <div className="p-4 px-6 pb-10">
      <DashboardCardforAdmin />
      <AdminAnalytics />
    </div>
  );
};

export default AdminDashboardPage;
