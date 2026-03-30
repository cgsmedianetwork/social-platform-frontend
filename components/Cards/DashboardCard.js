"use client";
import TrendIndicator from "@/helper/TrendIndicator";
import { useGetReachLikeCommentLastTwoMonthsDataQuery } from "@/Redux/Features/Social-connection/Social-connectionApiSlice";
import { Area, AreaChart, CartesianGrid } from "recharts";
import NumberFlowComponent from "../NumberFlow/NumberFlowComponent";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const DashboardCard = () => {
  const { data, isLoading, isError } =
    useGetReachLikeCommentLastTwoMonthsDataQuery();
  console.log(data);
  const description = "A simple area chart";
  const chartData = [
    { month: "January", reach: 0 },
    { month: "February", reach: 20 },
    { month: "March", reach: 50 },
    { month: "April", reach: 40 },
    { month: "May", reach: 80 },
    { month: "June", reach: 90 },
    { month: "July", reach: 80 },
    { month: "August", reach: 140 },
    { month: "September", reach: 200 },
    { month: "October", reach: 180 },
    { month: "November", reach: 240 },
  ];
  const chartData2 = [
    { month: "August", like: 140 },
    { month: "September", like: 200 },
    { month: "October", like: 180 },
    { month: "November", like: 240 },
    { month: "June", like: 90 },
    { month: "July", like: 80 },
    { month: "May", like: 80 },
    { month: "April", like: 40 },
    { month: "March", like: 50 },
    { month: "February", like: 20 },
    { month: "January", like: 0 },
  ];
  const chartConfig = {
    reach: {
      label: "Reach",
      color: "var(--chart-2)",
    },
  };
  const chartConfig2 = {
    reach: {
      label: "Like",
      color: "var(--chart-4)",
    },
  };
  return (
    <div className="grid grid-cols-3 gap-5 py-6">
      {/* card 1 */}
      <div className="p-5 px-6 border border-neutral-200 rounded-lg flex">
        <div className="flex-1">
          <p className="text-neutral-950 text-base font-semibold">Reach</p>
          <p className="text-3xl font-semibold mt-5">
            <NumberFlowComponent
              value={data?.data?.combined?.total?.views || 0}
            />
          </p>
          <p className="flex items-center gap-2 mt-4">
            <TrendIndicator
              percentage={data?.data?.combined?.trends?.views?.percentage}
              direction={data?.data?.combined?.trends?.views?.direction}
            />
            <span className="text-xs text-neutral-600">vs last month</span>
          </p>
        </div>
        <div className="w-1/3">
          <ChartContainer config={chartConfig} className={"w-full h-full"}>
            <AreaChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} horizontal={false} />

              <ChartTooltip
                cursor={true}
                offset={20}
                content={
                  <ChartTooltipContent
                    indicator="line"
                    labelFormatter={(_, payload) =>
                      payload?.[0]?.payload?.month ?? ""
                    }
                  />
                }
              />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-reach)"
                    stopOpacity={0.7}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-reach)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="reach"
                type="natural"
                fill="url(#colorUv)"
                fillOpacity={0.4}
                stroke="var(--color-reach)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
      <div className="p-5 px-6 border border-neutral-200 rounded-lg flex">
        <div className="flex-1">
          <p className="text-neutral-950 text-base font-semibold">Reactions</p>
          <p className="text-3xl font-semibold mt-5">
            <NumberFlowComponent
              value={data?.data?.combined?.total?.likes || 0}
            />
          </p>
          <p className="flex items-center gap-2 mt-4">
            <TrendIndicator
              percentage={data?.data?.combined?.trends?.likes?.percentage}
              direction={data?.data?.combined?.trends?.likes?.direction}
            />
            <span className="text-xs text-neutral-600">vs last month</span>
          </p>
        </div>
        <div className="w-1/3">
          <ChartContainer config={chartConfig2} className={"w-full h-full"}>
            <AreaChart accessibilityLayer data={chartData2}>
              <CartesianGrid vertical={false} horizontal={false} />
              <ChartTooltip
                cursor={true}
                offset={20}
                content={
                  <ChartTooltipContent
                    indicator="line"
                    labelFormatter={(_, payload) =>
                      payload?.[0]?.payload?.month ?? ""
                    }
                  />
                }
              />
              <defs>
                <linearGradient id="chart-like" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-chart-4)"
                    stopOpacity={0.7}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-chart-4)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="like"
                type="natural"
                fill="url(#chart-like)"
                fillOpacity={0.4}
                stroke="var(--color-chart-4)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
      <div className="p-5 px-6 border border-neutral-200 rounded-lg flex">
        <div className="flex-1">
          <p className="text-neutral-950 text-base font-semibold">Comments</p>
          <p className="text-3xl font-semibold mt-5">
            <NumberFlowComponent
              value={data?.data?.combined?.total?.comments || 0}
            />
          </p>
          <p className="flex items-center gap-2 mt-4">
            <TrendIndicator
              percentage={data?.data?.combined?.trends?.comments?.percentage}
              direction={data?.data?.combined?.trends?.comments?.direction}
            />
            <span className="text-xs text-neutral-600">vs last month</span>
          </p>
        </div>
        <div className="w-1/3">
          <ChartContainer config={chartConfig2} className={"w-full h-full"}>
            <AreaChart accessibilityLayer data={chartData2}>
              <CartesianGrid vertical={false} horizontal={false} />
              <ChartTooltip
                cursor={true}
                offset={20}
                content={
                  <ChartTooltipContent
                    indicator="line"
                    labelFormatter={(_, payload) =>
                      payload?.[0]?.payload?.month ?? ""
                    }
                  />
                }
              />
              <defs>
                <linearGradient id="chart-like" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-chart-4)"
                    stopOpacity={0.7}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-chart-4)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="like"
                type="natural"
                fill="url(#chart-like)"
                fillOpacity={0.4}
                stroke="var(--color-chart-4)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
