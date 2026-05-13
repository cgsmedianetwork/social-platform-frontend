import ConnectSocialMedia from "@/components/ConnectSocialMedia/ConnectSocialMedia";
import ProfileHeader from "@/components/Header/ProfileHeader";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";

const ProfilePage = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-400/50   pointer-events-none  rounded-full opacity-30 blur-[80px] -z-10"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-400/50   pointer-events-none  rounded-full opacity-30 blur-[80px] -z-10"></div>
      <div className="absolute top-[60%] right-[40%] w-72 h-72 bg-blue-400   pointer-events-none  rounded-full opacity-30 blur-[80px] -z-10"></div>
      <div className="w-full border-b border-[#EAECF0] bg-white z-20">
        <DashboardNavbar />
      </div>
      <div className="custom-container  mb-16">
        <ProfileHeader />
        {/* connect account section */}
        <ConnectSocialMedia />
      </div>
    </div>
  );
};

export default ProfilePage;
