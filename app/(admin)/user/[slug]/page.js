"use client";
import UserProfile from "@/components/Cards/UserProfile";
import PieForOverPerformance from "@/components/Charts/PieForOverPerformance";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CloudDownload } from "lucide-react";
import { useParams } from "next/navigation";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const UserPage = () => {
  const { slug } = useParams();
  // console.log(slug);
  const description = "A multiple line chart";
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
    mobile: {
      label: "Mobile",
      color: "var(--chart-2)",
    },
  };
  return (
    <div className="p-5 px-10 pb-20">
      <UserProfile id={slug} />
      <div className="mt-6">{/* <DashboardCardforAdmin /> */}</div>
      <div className="w-full grid grid-cols-3 gap-5 mt-6">
        <div className="col-span-2">
          <h4 className="text-lg font-medium">Profile Performance</h4>
          {/* tab  */}
          <div className="mt-2">
            <Tabs
              defaultValue="all"
              className={cn("bg-secondary-50 rounded-lg")}
            >
              <TabsList className={cn("bg-transparent py-1 px-1 h-auto")}>
                <TabsTrigger
                  value="all"
                  className={cn(
                    "!px-5 !py-2 data-[state=active]:!bg-white !shadow-none border-none cursor-pointer",
                  )}
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="facebook"
                  className={cn(
                    "!px-5 !py-2 data-[state=active]:!bg-white !shadow-none border-none cursor-pointer",
                  )}
                >
                  Facebook
                </TabsTrigger>
                <TabsTrigger
                  value="instagram"
                  className={cn(
                    "!px-5 !py-2 data-[state=active]:!bg-white !shadow-none border-none cursor-pointer",
                  )}
                >
                  Instagram
                </TabsTrigger>
                <TabsTrigger
                  value="youtube"
                  className={cn(
                    "!px-5 !py-2 data-[state=active]:!bg-white !shadow-none border-none cursor-pointer",
                  )}
                >
                  Youtube
                </TabsTrigger>
                <TabsTrigger
                  value="tiktok"
                  className={cn(
                    "!px-5 !py-2 data-[state=active]:!bg-white !shadow-none border-none cursor-pointer",
                  )}
                >
                  Tiktok
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          {/* chart  */}
          <div className="my-4">
            <ChartContainer
              config={chartConfig}
              className={"h-[300px] w-full py-8"}
            >
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 20,
                  right: 20,
                }}
              >
                <ChartLegend align="right" verticalAlign="top" />
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
        <div className="border  rounded-lg bg-white flex flex-col gap-1">
          <h1 className="text-sm font-semibold p-5">Overall Analytics</h1>
          <PieForOverPerformance />
          <div className="border-t p-3">
            <button className="border w-full p-2 rounded-md text-sm text-neutral-600 hover:bg-neutral-100 transition-all duration-300 flex items-center gap-2 justify-center cursor-pointer ">
              <CloudDownload size={18} /> Download Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
