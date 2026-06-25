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

const DashboardCardforAdmin = () => {
  const { data } = useGetReachLikeCommentLastTwoMonthsDataQuery();
  const { data: chartDataResponse, isFetching: isChartDataFetching } =
    useGetLast12MonthsChartDataQuery();

  const chartDataLast12Months = chartDataResponse?.data || [];
  const trends = data?.data?.combined?.trends;
  const total = data?.data?.combined?.total;
  // console.log(total);
  // console.log(trends);
  // console.log(chartDataLast12Months);

  const cards = [
    {
      title: "Reach",
      value: total?.views || 0,
      trend: trends?.views,
      keyName: "reach",
      gradientId: "admin-reach-gradient",
      config: {
        reach: {
          label: "Reach",
          color: getChartColor(trends?.views?.direction),
        },
      },
    },
    {
      title: "Reactions",
      value: total?.likes || 0,
      trend: trends?.likes,
      keyName: "like",
      gradientId: "admin-like-gradient",
      config: {
        like: {
          label: "Reactions",
          color: getChartColor(trends?.likes?.direction),
        },
      },
    },
    {
      title: "Comments",
      value: total?.comments || 0,
      trend: trends?.comments,
      keyName: "comment",
      gradientId: "admin-comment-gradient",
      config: {
        comment: {
          label: "Comments",
          color: getChartColor(trends?.comments?.direction),
        },
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards.map((card) => {
        const color = card.config[card.keyName].color;

        return (
          <div
            key={card.title}
            className="p-5 px-6 border border-[#EAECF0] rounded-lg flex bg-white"
          >
            <div className="flex-1">
              <p className="text-neutral-950 text-base font-semibold">
                {card.title}
              </p>

              <p className="text-3xl font-semibold mt-5">
                <NumberFlowComponent value={card.value} />
              </p>

              <p className="flex items-center gap-2 mt-4">
                <TrendIndicator
                  percentage={card.trend?.percentage}
                  direction={card.trend?.direction}
                />
                <span className="text-xs text-neutral-600">vs last month</span>
              </p>
            </div>

            <div className="w-1/2 sm:w-1/2 md:w-1/3">
              {isChartDataFetching ? (
                <DashboardCardSkeleton />
              ) : (
                <ChartContainer config={card.config} className="w-full h-full">
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
                      <linearGradient
                        id={card.gradientId}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="5%" stopColor={color} stopOpacity={0.7} />
                        <stop offset="95%" stopColor={color} stopOpacity={0} />
                      </linearGradient>
                    </defs>

                    <Area
                      dataKey={card.keyName}
                      type="natural"
                      fill={`url(#${card.gradientId})`}
                      fillOpacity={0.4}
                      stroke={color}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCardforAdmin;
