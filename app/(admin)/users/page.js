import UserList from "@/components/Cards/UserList";

const UsersPage = () => {
  return (
    <div className="p-2.5 sm:p-4 sm:px-6 max-w-[1200px] xl:mx-auto w-full pb-10">
      {/* <DashboardCardforAdmin /> */}
      <UserList className={"mt-8 border border-[#EAECF0]"} />
    </div>
  );
};

export default UsersPage;
