"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const PerformanceTrend = () => {
  const description = "A multiple line chart";
  // const chartData = [
  //   { month: "January", desktop: 186, mobile: 80 },
  //   { month: "February", desktop: 305, mobile: 200 },
  //   { month: "March", desktop: 237, mobile: 120 },
  //   { month: "April", desktop: 73, mobile: 190 },
  //   { month: "May", desktop: 209, mobile: 130 },
  //   { month: "June", desktop: 214, mobile: 140 },
  // ];
  // const chartConfig = {
  //   desktop: {
  //     label: "Desktop",
  //     color: "var(--chart-1)",
  //   },
  //   mobile: {
  //     label: "Mobile",
  //     color: "var(--chart-2)",
  //   },
  // };
  const chartData = [
    {
      month: "January",
      facebook: 90,
      youtube: 60,
      instagram: 90,
      tiktok: 80,
    },
    {
      month: "February",
      facebook: 105,
      youtube: 120,
      instagram: 150,
      tiktok: 100,
    },
    {
      month: "March",
      facebook: 137,
      youtube: 80,
      instagram: 110,
      tiktok: 70,
    },
    { month: "April", facebook: 73, youtube: 60, instagram: 80, tiktok: 50 },
    { month: "May", facebook: 99, youtube: 70, instagram: 90, tiktok: 60 },
    { month: "June", facebook: 80, youtube: 60, instagram: 110, tiktok: 70 },
    {
      month: "July",
      facebook: 149,
      youtube: 90,
      instagram: 130,
      tiktok: 80,
    },
    {
      month: "August",
      facebook: 140,
      youtube: 50,
      instagram: 100,
      tiktok: 30,
    },
    {
      month: "September",
      facebook: 209,
      youtube: 110,
      instagram: 170,
      tiktok: 100,
    },
    {
      month: "October",
      facebook: 239,
      youtube: 120,
      instagram: 110,
      tiktok: 120,
    },
    {
      month: "November",
      facebook: 264,
      youtube: 150,
      instagram: 140,
      tiktok: 130,
    },
    {
      month: "December",
      facebook: 150,
      youtube: 100,
      instagram: 120,
      tiktok: 110,
    },
  ];
  const chartConfig = {
    facebook: {
      label: "Facebook",
      color: "#1877F2",
    },
    youtube: {
      label: "Youtube",
      color: "#FF0000",
    },
    instagram: {
      label: "Instagram",
      color: "#8a49a1",
    },
    tiktok: {
      label: "Tiktok",
      color: "#282C35",
    },
  };
  const [date, setDate] = useState("12m");
  return (
    <div className="w-full p-5 px-6 rounded-lg bg-white">
      <div className="flex justify-between">
        <div className="flex-1">
          <h1 className="font-semibold text-lg">Performance Trends</h1>
          <p className="text-sm text-neutral-500">
            Manage your team members and their account permissions here.
          </p>
        </div>
        {/* btn */}
        <div className="flex border border-[#D0D5DD] rounded-md divide-x overflow-hidden h-fit">
          <button
            onClick={() => setDate("12m")}
            className={cn(
              "px-3 text-sm font-medium cursor-pointer py-2",
              date === "12m" && "bg-slate-100  "
            )}
          >
            12 months
          </button>
          <button
            onClick={() => setDate("30d")}
            className={cn(
              "px-3 text-sm font-medium cursor-pointer",
              date === "30d" && "bg-slate-100"
            )}
          >
            30 days
          </button>
        </div>
      </div>
      <div className="py-8 flex items-center justify-between">
        <div className="-rotate-90 text-sm text-neutral-500">Users</div>
        <ChartContainer
          config={chartConfig}
          className="w-full h-[280px] flex-1  "
        >
          <AreaChart accessibilityLayer data={chartData}>
            {/* <ChartLegend  /> */}
            <ChartLegend
              content={<ChartLegendContent />}
              verticalAlign="top"
              // align="right"
              className="justify-end"
            />
            <CartesianGrid vertical={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickCount={5}
              tickMargin={8}
              allowDecimals={false}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {/* <defs>
              <linearGradient id="fillFacebook" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-facebook)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-facebook)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillYoutube" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-youtube)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-youtube)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillInstagram" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-instagram)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-instagram)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillTiktok" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-tiktok)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-tiktok)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs> */}
            <Area
              dataKey="facebook"
              type="natural"
              fill="url(#fillFacebook)"
              fillOpacity={0.4}
              stroke="var(--color-facebook)"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="youtube"
              type="natural"
              fill="url(#fillYoutube)"
              fillOpacity={0.4}
              stroke="var(--color-youtube)"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="instagram"
              type="natural"
              fill="url(#fillInstagram)"
              fillOpacity={0.4}
              stroke="var(--color-instagram)"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="tiktok"
              type="natural"
              fill="url(#fillTiktok)"
              fillOpacity={0.4}
              stroke="var(--color-tiktok)"
              strokeWidth={2}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </div>
      {/* <div className="my-4">
        <ChartContainer
          config={chartConfig}
          className={"h-[300px] w-full py-8"}
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
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
      </div> */}
    </div>
  );
};

export default PerformanceTrend;
