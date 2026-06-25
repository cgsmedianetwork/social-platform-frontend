"use client";
import getChartColor from "@/helper/getChartColor";
import TrendIndicator from "@/helper/TrendIndicator";
import {
  useGetLast12MonthsChartDataQuery,
  useGetReachLikeCommentLastTwoMonthsDataQuery,
} from "@/Redux/Features/Social-connection/Social-connectionApiSlice";
import { Area, AreaChart, CartesianGrid } from "recharts";
import NumberFlowComponent from "../NumberFlow/NumberFlowComponent";
import DashboardCardSkeleton from "../Skeleton/DashboardCardSk";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const DashboardCard = () => {
  const { data, isLoading, isError } =
    useGetReachLikeCommentLastTwoMonthsDataQuery();
  const { data: chartDataResponse, isFetching: isChartDataFetching } =
    useGetLast12MonthsChartDataQuery();
  // console.log(chartDataResponse);
  const chartDataLast12Months = chartDataResponse?.data || [];
  // console.log(chartDataLast12Months);
  const trends = data?.data?.combined?.trends;

  // console.log(trends);
  const reachColor = getChartColor(trends?.views?.direction);
  const likesColor = getChartColor(trends?.likes?.direction);
  const commentsColor = getChartColor(trends?.comments?.direction);
  // console.log(reachColor, likesColor, commentsColor);

  // Dynamic chart configs
  const reachChartConfig = {
    reach: { label: "Reach", color: reachColor },
  };
  const likesChartConfig = {
    like: { label: "Reactions", color: likesColor },
  };
  const commentsChartConfig = {
    comment: { label: "Comments", color: commentsColor },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-6">
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
        <div className="w-1/2 sm:w-1/3">
          {isChartDataFetching ? (
            <DashboardCardSkeleton />
          ) : (
            <ChartContainer
              config={reachChartConfig}
              className={"w-full h-full"}
            >
              <AreaChart accessibilityLayer data={chartDataLast12Months}>
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
          )}
        </div>
      </div>
      {/* card 2  */}
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
        <div className="w-1/2 sm:w-1/3">
          {isChartDataFetching ? (
            <DashboardCardSkeleton />
          ) : (
            <ChartContainer
              config={likesChartConfig}
              className={"w-full h-full"}
            >
              <AreaChart accessibilityLayer data={chartDataLast12Months}>
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
                      stopColor="var(--color-like)"
                      stopOpacity={0.7}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-like)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="like"
                  type="natural"
                  fill="url(#chart-like)"
                  fillOpacity={0.4}
                  stroke="var(--color-like)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          )}
        </div>
      </div>
      {/* card 3  */}
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
        <div className="w-1/2 sm:w-1/3">
          {isChartDataFetching ? (
            <DashboardCardSkeleton />
          ) : (
            <ChartContainer
              config={commentsChartConfig}
              className={"w-full h-full"}
            >
              <AreaChart accessibilityLayer data={chartDataLast12Months}>
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
                      stopColor="var(--color-comment)"
                      stopOpacity={0.7}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-comment)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="comment"
                  type="natural"
                  fill="url(#chart-like)"
                  fillOpacity={0.4}
                  stroke="var(--color-comment)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
