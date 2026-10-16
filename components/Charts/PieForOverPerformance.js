"use client";

import { Pie, PieChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

// Shows the share of total followers for each connected account.
const PieForOverPerformance = ({ accounts = [] }) => {
  const chartData = accounts
    .filter((account) => Number(account.followers) > 0)
    .map((account) => ({
      key: account.key,
      followers: Number(account.followers),
      fill: `var(--color-${account.key})`,
    }));

  const chartConfig = accounts.reduce(
    (config, account) => ({
      ...config,
      [account.key]: { label: account.label, color: account.color },
    }),
    { followers: { label: "Followers" } },
  );

  const totalFollowers = chartData.reduce(
    (total, item) => total + item.followers,
    0,
  );

  if (chartData.length === 0) {
    return (
      <div className="w-full flex-1 flex items-center justify-center p-5 text-sm text-neutral-500 text-center">
        No follower data yet. Refresh the analytics after the user connects an
        account.
      </div>
    );
  }

  return (
    <div className="w-full flex-1 px-5 pb-4">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="followers"
            nameKey="key"
            innerRadius={40}
            outerRadius={100}
          />
        </PieChart>
      </ChartContainer>
      <p className="text-center text-sm text-neutral-500">
        Total followers:{" "}
        <span className="font-semibold text-neutral-800">
          {totalFollowers.toLocaleString()}
        </span>
      </p>
      <ul className="mt-3 flex flex-col gap-1.5 text-xs">
        {chartData.map((item) => (
          <li key={item.key} className="flex items-center gap-2">
            <span
              className="size-2.5 rounded-sm shrink-0"
              style={{ backgroundColor: chartConfig[item.key].color }}
            />
            <span className="flex-1 truncate text-neutral-600">
              {chartConfig[item.key].label}
            </span>
            <span className="text-neutral-800">
              {item.followers.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieForOverPerformance;
