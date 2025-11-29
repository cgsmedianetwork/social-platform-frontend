"use client";
import { ArrowUp } from "lucide-react";
import { Area, AreaChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const DashboardCardforAdmin = () => {
  const description = "A simple area chart";
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#155dfc",
    },
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="p-5 px-6 border border-[#EAECF0] rounded-lg flex bg-white">
        <div className="flex-1">
          <p className="text-neutral-950 text-base font-semibold">
            Avg. Engagement
          </p>
          <p className="text-3xl font-semibold mt-5">2,420</p>
          <p className="flex items-center gap-2 mt-4">
            <span className="flex items-center gap-0.5 text-green-700 text-xs">
              <ArrowUp size={16} strokeWidth={2.5} className="text-green-600" />{" "}
              100%{" "}
            </span>
            <span className="text-xs text-neutral-600">vs last month</span>
          </p>
        </div>
        <div className="w-1/3">
          <ChartContainer config={chartConfig} className={"w-full h-full "}>
            <AreaChart data={chartData}>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    indicator="line"
                    description={description}
                  />
                }
              />
              <defs>
                <linearGradient id="chart-like" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#155dfc" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#155dfc" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                dataKey="desktop"
                type="natural"
                fill="url(#chart-like)"
                fillOpacity={0.4}
                stroke="#155dfc"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
      <div className="p-5 px-6 border border-[#EAECF0] rounded-lg flex bg-white">
        <div className="flex-1">
          <p className="text-neutral-950 text-base font-semibold">
            Avg. Engagement
          </p>
          <p className="text-3xl font-semibold mt-5">2,420</p>
          <p className="flex items-center gap-2 mt-4">
            <span className="flex items-center gap-0.5 text-green-700 text-xs">
              <ArrowUp size={16} strokeWidth={2.5} className="text-green-600" />{" "}
              100%{" "}
            </span>
            <span className="text-xs text-neutral-600">vs last month</span>
          </p>
        </div>
        <div className="w-1/3">
          <ChartContainer config={chartConfig} className={"w-full h-full "}>
            <AreaChart data={chartData}>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    indicator="line"
                    description={description}
                  />
                }
              />
              <defs>
                <linearGradient id="chart-like" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#155dfc" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#155dfc" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                dataKey="desktop"
                type="natural"
                fill="url(#chart-like)"
                fillOpacity={0.4}
                stroke="#155dfc"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
      <div className="p-5 px-6 border border-[#EAECF0] rounded-lg flex bg-white">
        <div className="flex-1">
          <p className="text-neutral-950 text-base font-semibold">
            Avg. Engagement
          </p>
          <p className="text-3xl font-semibold mt-5">2,420</p>
          <p className="flex items-center gap-2 mt-4">
            <span className="flex items-center gap-0.5 text-green-700 text-xs">
              <ArrowUp size={16} strokeWidth={2.5} className="text-green-600" />{" "}
              100%{" "}
            </span>
            <span className="text-xs text-neutral-600">vs last month</span>
          </p>
        </div>
        <div className="w-1/3">
          <ChartContainer config={chartConfig} className={"w-full h-full "}>
            <AreaChart data={chartData}>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    indicator="line"
                    description={description}
                  />
                }
              />
              <defs>
                <linearGradient id="chart-like" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#155dfc" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#155dfc" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                dataKey="desktop"
                type="natural"
                fill="url(#chart-like)"
                fillOpacity={0.4}
                stroke="#155dfc"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCardforAdmin;
