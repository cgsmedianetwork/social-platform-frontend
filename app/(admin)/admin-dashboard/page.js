import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/Assets/svgs/socialIcons";
import AnalyticsReportCard from "@/components/Cards/AnalyticsReportCard";
import DashboardCardforAdmin from "@/components/Cards/DashboardCardforAdmin";

const AdminDashboardPage = () => {
  return (
    <div className="p-4 px-6 pb-10">
      <DashboardCardforAdmin />
      <div className="mt-5">
        <h1 className="text-lg font-medium">Analytics Report</h1>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <AnalyticsReportCard
            icon={<FacebookIcon />}
            title={"Facebook Summary"}
            followers={1000}
            engagement={288}
            impressions={"20.8k"}
            // facebook coror
            color={"#1877F2"}
          />
          <AnalyticsReportCard
            icon={<YoutubeIcon />}
            title={"Youtube Summary"}
            followers={900}
            engagement={200}
            impressions={"15.5k"}
            color={"#FF0000"}
          />
          <AnalyticsReportCard
            icon={<InstagramIcon />}
            title={"Instagram Summary"}
            followers={800}
            engagement={188}
            impressions={"12.5k"}
            color={"#C13584"}
          />
          <AnalyticsReportCard
            icon={<TikTokIcon />}
            title={"Tiktok Summary"}
            followers={700}
            engagement={150}
            impressions={"10.2k"}
            color={"#000000"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
