import DashboardCardforAdmin from "@/components/Cards/DashboardCardforAdmin";
import UserList from "@/components/Cards/UserList";

const UsersPage = () => {
  return (
    <div className="p-4 px-6 pb-10">
      <DashboardCardforAdmin />
      <UserList className={"mt-8 border border-[#EAECF0]"} />
    </div>
  );
};

export default UsersPage;
