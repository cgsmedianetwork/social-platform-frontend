"use client";
import { FacebookIcon } from "@/Assets/svgs/socialIcons";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const AnalyticsReportCard = () => {
  const description = "A line chart";
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
      color: "var(--chart-1)",
    },
  };
  return (
    <div className="bg-white rounded-md p-4 px-5">
      <div className="flex items-center gap-3">
        <FacebookIcon />{" "}
        <span className="inline-block text-base text-neutral-800">
          Facebook Summary
        </span>
      </div>
      <div className="flex items-center justify-between gap-2 mt-4 text-sm text-neutral-500">
        <p>Followers: 1000</p>
        <p>Engagement: 288</p>
        <p>Impressions: 20.8k</p>
      </div>
      <div className="mt-8 pb-3">
        <ChartContainer config={chartConfig} className={"h-[250px] w-full"}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default AnalyticsReportCard;
