"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const PerformanceTrend = () => {
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
      <div className="my-4">
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
      </div>
    </div>
  );
};

export default PerformanceTrend;
