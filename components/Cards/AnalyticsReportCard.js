"use client";
import Image from "next/image";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const formatValue = (value) => {
  if (value === null || value === undefined) return "N/A";
  return Number(value).toLocaleString();
};

const AnalyticsReportCard = ({ account }) => {
  const description = "A line chart";
  // const chartData = [
  //   { month: "January", desktop: 186 },
  //   { month: "February", desktop: 305 },
  //   { month: "March", desktop: 237 },
  //   { month: "April", desktop: 73 },
  //   { month: "May", desktop: 209 },
  //   { month: "June", desktop: 214 },
  // ];

  // const chartConfig = {
  //   desktop: {
  //     label: "Desktop",
  //     color: color || "var(--chart-1)",
  //   },
  // };

  const chartData = account?.chartData || [];
  const chartConfig = {
    reach: {
      label: "Reach / Views",
      color: "#1877F2",
    },
    engagement: {
      label: "Engagement",
      color: "#22C55E",
    },
    followersGained: {
      label: "Followers Gained",
      color: "#F97316",
    },
  };

  // return (
  //   <div className="bg-white rounded-md p-4 px-5">
  //     <div className="flex items-center gap-3">
  //       {icon}
  //       <span className="inline-block text-base text-neutral-800">{title}</span>
  //     </div>
  //     <div className="flex items-center justify-between gap-2 mt-4 text-sm text-neutral-500">
  //       <p>Followers: {followers}</p>
  //       <p>Engagement: {engagement}</p>
  //       <p>Impressions: {impressions}</p>
  //     </div>
  //     <div className="mt-8 pb-3">
  //       <ChartContainer config={chartConfig} className={"h-[250px] w-full"}>
  //         <LineChart
  //           accessibilityLayer
  //           data={chartData}
  //           margin={{ left: 12, right: 12 }}
  //         >
  //           <CartesianGrid vertical={false} />
  //           <XAxis
  //             dataKey="month"
  //             tickLine={false}
  //             axisLine={false}
  //             tickMargin={8}
  //             tickFormatter={(value) => value.slice(0, 3)}
  //           />
  //           <ChartTooltip
  //             cursor={false}
  //             content={<ChartTooltipContent hideLabel />}
  //           />
  //           <Line
  //             dataKey="desktop"
  //             type="natural"
  //             stroke="var(--color-desktop)"
  //             strokeWidth={2}
  //             dot={false}
  //           />
  //         </LineChart>
  //       </ChartContainer>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-white rounded-md p-3 sm:p-4 px-3 sm:px-5 w-full">
      {/* accounts  */}
      <div className="flex items-center gap-3">
        {account?.accountImage ? (
          <Image
            src={account.accountImage}
            alt={account.accountName}
            className="w-9 h-9 rounded-full object-cover"
            width={36}
            height={36}
            loading="lazy"
          />
        ) : (
          <span
            className="w-9 h-9 rounded-full inline-block"
            style={{ backgroundColor: account?.color || "#111827" }}
          />
        )}
        <div>
          <span className="block text-sm sm:text-base text-neutral-800">
            {account?.accountName}
          </span>
          <span className="block text-xs capitalize text-neutral-500">
            {account?.provider}
          </span>
        </div>
      </div>
      {/* followers, reach, engagement headers  */}
      <div className="flex justify-between items-center gap-1 mt-4">
        <div className="flex justify-between gap-2 text-[13px] text-neutral-500 flex-1">
          <div className="flex flex-col items-center ">
            Followers:{" "}
            <span className="text-neutral-800 text-xs">
              {formatValue(account?.latest?.totalFollowers)}
            </span>
          </div>
          <div className="flex flex-col items-center">
            Reach/Views: <br className="sm:hidden" /> (this month)
            <span className="text-neutral-800">
              {formatValue(account?.latest?.reach)}
            </span>
          </div>
          <div className="flex flex-col items-center">
            Engagement:
            <span className="text-neutral-800">
              {formatValue(account?.latest?.engagement)}
            </span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-neutral-400">
        {account?.latest?.fetchedAt
          ? `Last updated: ${new Date(account.latest.fetchedAt).toLocaleString()}`
          : "Not updated yet"}
      </p>
      {/* error message  */}
      {account?.latest?.status === "failed" && (
        <p className="mt-2 text-xs text-red-500">
          {account.latest.errorMessage || "Failed to fetch latest analytics"}
        </p>
      )}
      {/* charts  */}
      <div className="mt-8 pb-3 w-full">
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart data={chartData} margin={{ left: -10, right: 12 }}>
            <CartesianGrid vertical={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              allowDecimals={false}
              tickFormatter={(value) => Number(value).toLocaleString()}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="reach"
              fill="var(--color-reach)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="engagement"
              fill="var(--color-engagement)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="followersGained"
              fill="var(--color-followersGained)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default AnalyticsReportCard;
