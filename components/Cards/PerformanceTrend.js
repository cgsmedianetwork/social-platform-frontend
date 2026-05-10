// "use client";

// import { useGetFollowersLast12MonthsQuery } from "@/Redux/Features/Social-connection/Social-connectionApiSlice";
// import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
// import { Skeleton } from "../ui/skeleton";

// const PerformanceTrend = () => {
//   const {
//     data: followersLast12MonthsResponse,
//     isFetching: isFollowersLast12MonthsFetching,
//   } = useGetFollowersLast12MonthsQuery();

//   const accounts = followersLast12MonthsResponse?.data?.accounts || [];
//   const chartData = followersLast12MonthsResponse?.data?.chartData || [];

//   const chartConfig = {};
//   accounts.forEach((acc) => {
//     chartConfig[acc.key] = {
//       label: acc.accountName,
//       color: acc.color,
//     };
//   });

//   return (
//     <div className="w-full p-5 px-6 rounded-lg bg-white">
//       <div className="flex justify-between">
//         <div className="flex-1">
//           <h1 className="font-semibold text-lg">Performance Trends</h1>
//           <p className="text-sm text-neutral-500">
//             Followers/Likes performance from connected social accounts.
//           </p>
//         </div>
//       </div>

//       {isFollowersLast12MonthsFetching ? (
//         <Skeleton className="w-full h-[280px] my-8" />
//       ) : accounts.length > 0 ? (
//         <>
//           <div className="flex items-center gap-2 py-2 ml-auto w-fit flex-wrap">
//             <p className="text-xs flex items-center gap-1">
//               <span className="w-2 h-2 bg-[#1877F2] inline-block"></span>{" "}
//               Facebook
//             </p>
//             {/* youtube */}
//             <p className="text-xs flex items-center gap-1">
//               <span className="w-2 h-2 bg-[#FF0000] inline-block"></span>{" "}
//               Youtube
//             </p>
//             {/* instagram */}
//             <p className="text-xs flex items-center gap-1">
//               <span className="w-2 h-2 bg-[#8a49a1] inline-block"></span>{" "}
//               Instagram
//             </p>
//             {/* tiktok */}
//             <p className="text-xs flex items-center gap-1">
//               <span className="w-2 h-2 bg-[#282C35] inline-block"></span> Tiktok
//             </p>
//           </div>

//           <div className="py-8 flex items-center justify-between">
//             <div className="-rotate-90 w-8 text-sm text-neutral-500">
//               Followers/Likes
//             </div>

//             <ChartContainer
//               config={chartConfig}
//               className="w-full h-[280px] flex-1"
//             >
//               <LineChart
//                 accessibilityLayer
//                 data={chartData}
//                 margin={{ left: -10 }}
//               >
//                 <CartesianGrid vertical={false} />

//                 <YAxis
//                   axisLine={false}
//                   tickLine={false}
//                   tickCount={5}
//                   tickMargin={8}
//                   allowDecimals={false}
//                   tickFormatter={(value) => value.toLocaleString()}
//                 />

//                 <XAxis
//                   dataKey="month"
//                   tickLine={false}
//                   axisLine={false}
//                   tickMargin={8}
//                   padding={{ left: 2 }}
//                   tickFormatter={(value) => value.slice(0, 3)}
//                 />

//                 <ChartTooltip
//                   cursor={false}
//                   content={<ChartTooltipContent hideLabel />}
//                 />

//                 {accounts.map((acc) => (
//                   <Line
//                     key={acc.key}
//                     dataKey={acc.key}
//                     type="bump"
//                     stroke={`var(--color-${acc.key})`}
//                     dot={false}
//                     strokeWidth={2}
//                   />
//                 ))}
//               </LineChart>
//             </ChartContainer>
//           </div>

//           <p className="w-full text-right text-xs">
//             <span className="text-red-500">*</span> Some data might be missing
//             for platform restrictions.
//           </p>
//         </>
//       ) : (
//         <p className="py-8 text-neutral-500 text-center">
//           No social accounts connected.
//         </p>
//       )}
//     </div>
//   );
// };

// export default PerformanceTrend;

"use client";

import { useGetTotalFollowersByAccountQuery } from "@/Redux/Features/Social-connection/Social-connectionApiSlice";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Skeleton } from "../ui/skeleton";

const PerformanceTrend = () => {
  const { data, isFetching } = useGetTotalFollowersByAccountQuery();

  const chartData = data?.data?.chartData || [];

  const chartConfig = {
    total: {
      label: "Total",
      color: "#1877F2",
    },
  };

  return (
    <div className="w-full p-5 px-6 rounded-lg bg-white">
      <div className="flex justify-between">
        <div className="flex-1">
          <h1 className="font-semibold text-lg">
            Total Followers / Subscribers
          </h1>
          <p className="text-sm text-neutral-500">
            Total followers/subscribers from connected platforms.
          </p>
        </div>
      </div>

      {isFetching ? (
        <Skeleton className="w-full h-[280px] my-8" />
      ) : chartData.length > 0 ? (
        <div className="py-8 flex items-center justify-between">
          {/* <div className="-rotate-90 w-8 text-sm text-neutral-500 text-center">
            Followers /Subscribers
          </div> */}

          <ChartContainer
            config={chartConfig}
            className="w-full h-[280px] flex-1"
          >
            <BarChart data={chartData} margin={{ left: -10 }}>
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
                dataKey="label"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) =>
                  value.length > 10 ? `${value.slice(0, 10)}...` : value
                }
              />

              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              <Bar dataKey="total" radius={[6, 6, 0, 0]}>
                {chartData.map((entry) => (
                  <Cell
                    key={`${entry.provider}-${entry.providerId}`}
                    fill={entry.color}
                  />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      ) : (
        <p className="py-16 text-neutral-500 text-center">
          No social accounts connected.
        </p>
      )}
    </div>
  );
};

export default PerformanceTrend;
