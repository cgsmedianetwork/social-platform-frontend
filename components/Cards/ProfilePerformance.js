"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const ProfilePerformance = () => {
  const description = "An area chart with gradient fill";
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

  return (
    <div className="border rounded-lg p-5 px-7 my-4 mb-12">
      <h1 className="text-base font-semibold w-full border-b pb-5 text-neutral-900">
        Profile Performance - views
      </h1>
      <div className="py-8 flex items-center justify-between">
        <div className="-rotate-90 text-sm text-neutral-500">views</div>
        <ChartContainer
          config={chartConfig}
          className="w-full h-[280px] flex-1  "
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            // margin={{
            //   left: 20,
            //   right: 20,
            // }}
          >
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
            <defs>
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
            </defs>
            <Area
              dataKey="facebook"
              type="natural"
              fill="url(#fillFacebook)"
              fillOpacity={0.4}
              stroke="var(--color-facebook)"
              stackId="a"
            />
            <Area
              dataKey="youtube"
              type="natural"
              fill="url(#fillYoutube)"
              fillOpacity={0.4}
              stroke="var(--color-youtube)"
              stackId="a"
            />
            <Area
              dataKey="instagram"
              type="natural"
              fill="url(#fillInstagram)"
              fillOpacity={0.4}
              stroke="var(--color-instagram)"
              stackId="a"
            />
            <Area
              dataKey="tiktok"
              type="natural"
              fill="url(#fillTiktok)"
              fillOpacity={0.4}
              stroke="var(--color-tiktok)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ProfilePerformance;
