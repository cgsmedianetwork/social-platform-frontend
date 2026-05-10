"use client";
import TrendIndicator from "@/helper/TrendIndicator";
import { useGetTotalUserSummaryQuery } from "@/Redux/Features/Auth/AuthApiSlice";
import NumberFlowComponent from "../NumberFlow/NumberFlowComponent";

const TotalUser = () => {
  const { data } = useGetTotalUserSummaryQuery();
  const summary = data?.data || {};
  // console.log(summary);

  const items = [
    {
      label: "Total Users",
      value: summary.totalUser?.total || 0,
      trend: summary.totalUser?.trend,
    },
    {
      label: "Facebook",
      value: summary.facebook?.total || 0,
      trend: summary.facebook?.trend,
    },
    {
      label: "Youtube",
      value: summary.youtube?.total || 0,
      trend: summary.youtube?.trend,
    },
    {
      label: "Instagram",
      value: summary.instagram?.total || 0,
      trend: summary.instagram?.trend,
    },
    {
      label: "Tiktok",
      value: summary.tiktok?.total || 0,
      trend: summary.tiktok?.trend,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-md px-5 py-1 divide-y">
      {items.map((item) => (
        <div key={item.label} className="flex justify-between py-3">
          <div>
            <p className="text-base font-medium text-neutral-600">
              {item.label}
            </p>
            <p className="flex items-center gap-2 text-xs text-neutral-500 mt-1.5">
              <span className="text-chart-2 flex items-center gap-1 font-medium">
                <TrendIndicator
                  percentage={item.trend?.percentage}
                  direction={item.trend?.direction}
                />
              </span>
              <span>vs last month</span>
            </p>
          </div>
          <p className="text-base font-semibold">
            <NumberFlowComponent value={item.value} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default TotalUser;
