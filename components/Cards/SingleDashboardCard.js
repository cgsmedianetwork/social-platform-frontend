import { AreaChart, ArrowUp } from "lucide-react";
import { Area, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const SingleDashboardCard = ({
  title,
  value,
  percentage,
  chartData,
  chartConfig,
  color,
  dataKey,
}) => {
  return (
    <div className="p-5 px-6 border border-neutral-200 rounded-lg flex">
      <div className="flex-1">
        <p className="text-neutral-950 text-base font-semibold">{title}</p>
        <p className="text-3xl font-semibold mt-5">{value}</p>
        <p className="flex items-center gap-2 mt-4">
          <span className="flex items-center gap-0.5 text-green-700 text-xs">
            <ArrowUp size={16} strokeWidth={2.5} className="text-green-600" />{" "}
            {percentage}%{" "}
          </span>
          <span className="text-xs text-neutral-600">vs last month</span>
        </p>
      </div>
      <div className="w-1/3">
        <ChartContainer config={chartConfig} className={"w-full h-full"}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            //   margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            {/* <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          /> */}
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
                <stop offset="5%" stopColor={color} stopOpacity={0.7} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              dataKey={dataKey}
              type="natural"
              fill="url(#colorUv)"
              fillOpacity={0.4}
              stroke={color}
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default SingleDashboardCard;
