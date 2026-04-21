"use client";
import { useGetFollowersLast12MonthsQuery } from "@/Redux/Features/Social-connection/Social-connectionApiSlice";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Skeleton } from "../ui/skeleton";

const ProfilePerformance = () => {
  const {
    data: followersLast12MonthsResponse,
    isFetching: isFollowersLast12MonthsFetching,
  } = useGetFollowersLast12MonthsQuery();
  // console.log(followersLast12MonthsResponse);
  const accounts = followersLast12MonthsResponse?.data?.accounts || [];
  const chartData1 = followersLast12MonthsResponse?.data?.chartData || [];
  // console.log(accounts);
  // console.log(chartData1);

  const chartConfig = {};
  accounts.forEach((acc) => {
    chartConfig[acc.key] = {
      label: acc.accountName,
      // label: `${acc.accountName} (${acc.provider})`,
      color: acc.color,
    };
  });
  // console.log(chartConfig);

  return (
    <div className="border rounded-lg p-5 px-7 my-4 mb-12">
      <h1 className="text-base font-semibold w-full border-b pb-5 text-neutral-900">
        Profile Performance - Followers/Likes
      </h1>

      {isFollowersLast12MonthsFetching ? (
        <Skeleton className="w-full h-[300px] my-4" />
      ) : (
        <>
          {accounts.length > 0 ? (
            <>
              <div className="flex items-center gap-2 py-2 ml-auto w-fit flex-wrap">
                <p className="text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#1877F2] inline-block"></span>{" "}
                  Facebook
                </p>
                {/* youtube */}
                <p className="text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#FF0000] inline-block"></span>{" "}
                  Youtube
                </p>
                {/* instagram */}
                <p className="text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#8a49a1] inline-block"></span>{" "}
                  Instagram
                </p>
                {/* tiktok */}
                <p className="text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#282C35] inline-block"></span>{" "}
                  Tiktok
                </p>
              </div>
              <div className="py-8 flex items-center justify-between gap-0 ">
                <div className="-rotate-90 text-sm text-neutral-500 -ml-5 ">
                  Followers/Likes
                </div>

                <ChartContainer
                  config={chartConfig}
                  className={"h-[300px] w-full "}
                >
                  <LineChart
                    accessibilityLayer
                    data={chartData1}
                    margin={{
                      left: 14,
                      right: 5,
                      top: 10,
                      bottom: 10,
                    }}
                  >
                    {/* <ChartLegend
              content={<ChartLegendContent />}
              verticalAlign="top"
              // align="right"
              className="justify-end"
            /> */}
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
                      content={
                        <ChartTooltipContent
                          hideLabel
                          // now tooltip like CYGBYTE (facebook) but not want show bracket and show only CYGBYTE
                        />
                      }
                    />

                    {accounts.map((acc) => (
                      <Line
                        key={acc.key}
                        dataKey={acc.key}
                        type="bump"
                        stroke={`var(--color-${acc.key})`}
                        dot={false}
                        strokeWidth={2}
                        // filter="url(#rainbow-line-glow)"
                      />
                    ))}
                    <defs>
                      <filter
                        id="rainbow-line-glow"
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%"
                      >
                        <feGaussianBlur stdDeviation="10" result="blur" />
                        <feComposite
                          in="SourceGraphic"
                          in2="blur"
                          operator="over"
                        />
                      </filter>
                    </defs>
                  </LineChart>
                </ChartContainer>
              </div>
            </>
          ) : (
            <div className="border rounded-lg p-5 px-7 my-4 mb-12">
              <p className="py-8 text-neutral-500 text-center">
                No social accounts connected.
              </p>
            </div>
          )}
          <p className="w-full text-right text-xs">
            <span className="text-red-500">*</span> Some data might be missing
            for platform restrictions.
          </p>
        </>
      )}
    </div>
  );
};

export default ProfilePerformance;
