"use client";
import UserProfile from "@/components/Cards/UserProfile";
import PieForOverPerformance from "@/components/Charts/PieForOverPerformance";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  useGetAdminAccountAnalyticsQuery,
  useRefreshAdminAccountAnalyticsMutation,
} from "@/Redux/Features/analytics/analyticsApiSlice";
import { CloudDownload, LoaderIcon, RefreshCw } from "lucide-react";
import moment from "moment";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const platformTabs = [
  { value: "all", label: "All" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "youtube", label: "Youtube" },
  { value: "tiktok", label: "Tiktok" },
];

const metricOptions = [
  { value: "reach", label: "Reach / Views" },
  { value: "engagement", label: "Engagement" },
  { value: "followersGained", label: "Followers Gained" },
];

// Used when two accounts share the same provider color.
const fallbackColors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const tabTriggerClass =
  "!px-5 !py-2 data-[state=active]:!bg-white !shadow-none border-none cursor-pointer";

const UserPage = () => {
  const { slug } = useParams();
  const [platform, setPlatform] = useState("all");
  const [metric, setMetric] = useState("reach");

  const { data, isFetching, isError, error } = useGetAdminAccountAnalyticsQuery(
    slug,
    { skip: !slug },
  );
  const [
    refreshAnalytics,
    { isLoading: isRefreshing, isError: isRefreshError, error: refreshError },
  ] = useRefreshAdminAccountAnalyticsMutation();

  const lastUpdated = data?.data?.lastUpdated;

  // Give each account a CSS-safe key and a unique color.
  const accounts = useMemo(() => {
    const usedColors = new Set();
    return (data?.data?.accounts || []).map((account, index) => {
      let color = account.color;
      if (!color || usedColors.has(color)) {
        color = fallbackColors[index % fallbackColors.length];
      }
      usedColors.add(color);
      return {
        ...account,
        key: `account${index}`,
        label: `${account.accountName} (${account.provider})`,
        color,
        followers: account.latest?.totalFollowers,
      };
    });
  }, [data]);

  const visibleAccounts = useMemo(
    () =>
      platform === "all"
        ? accounts
        : accounts.filter((account) => account.provider === platform),
    [accounts, platform],
  );

  // The backend returns the same six months for every account, so the rows
  // line up by index.
  const chartData = useMemo(() => {
    const months = visibleAccounts[0]?.chartData || [];
    return months.map((row, monthIndex) => {
      const point = { month: row.month };
      visibleAccounts.forEach((account) => {
        point[account.key] = account.chartData?.[monthIndex]?.[metric] ?? null;
      });
      return point;
    });
  }, [visibleAccounts, metric]);

  const chartConfig = useMemo(
    () =>
      visibleAccounts.reduce(
        (config, account) => ({
          ...config,
          [account.key]: { label: account.label, color: account.color },
        }),
        {},
      ),
    [visibleAccounts],
  );

  const handleRefresh = useCallback(async () => {
    try {
      await refreshAnalytics(slug).unwrap();
    } catch (caughtError) {
      console.error("Refresh analytics failed:", caughtError);
    }
  }, [refreshAnalytics, slug]);

  // The backend cron does not run on Vercel. When the user has connected
  // accounts but no saved snapshot, fetch the analytics once on the first
  // visit. The ref stops a loop if that fetch fails.
  const autoRefreshedFor = useRef(null);
  const hasNoSnapshot =
    Boolean(data) && !lastUpdated && (data?.data?.accounts?.length || 0) > 0;

  useEffect(() => {
    if (
      hasNoSnapshot &&
      !isFetching &&
      !isRefreshing &&
      autoRefreshedFor.current !== slug
    ) {
      autoRefreshedFor.current = slug;
      handleRefresh();
    }
  }, [hasNoSnapshot, isFetching, isRefreshing, slug, handleRefresh]);

  const handleDownload = () => {
    window.print();
  };

  const renderChart = () => {
    if (isRefreshing && !lastUpdated) {
      return (
        <p className="py-20 text-center text-sm text-neutral-500 flex items-center justify-center gap-2">
          <LoaderIcon className="size-4 animate-spin" /> Fetching analytics
          from the connected accounts. This can take some seconds...
        </p>
      );
    }
    if (isFetching) {
      return (
        <p className="py-20 text-center text-sm text-neutral-500">
          Loading analytics...
        </p>
      );
    }
    if (isError) {
      return (
        <p className="py-20 text-center text-sm text-red-500">
          {error?.data?.message || "Failed to load analytics"}
        </p>
      );
    }
    if (visibleAccounts.length === 0) {
      return (
        <p className="py-20 text-center text-sm text-neutral-500">
          {platform === "all"
            ? "This user has no connected accounts."
            : "This user has no connected account on this platform."}
        </p>
      );
    }
    return (
      <ChartContainer config={chartConfig} className="h-[320px] w-full">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{ top: 10, left: 0, right: 20 }}
        >
          <CartesianGrid vertical={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            allowDecimals={false}
            tickFormatter={(value) => Number(value).toLocaleString()}
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          {visibleAccounts.map((account) => (
            <Line
              key={account.key}
              dataKey={account.key}
              type="monotone"
              stroke={`var(--color-${account.key})`}
              strokeWidth={2}
              dot={{ r: 3 }}
              connectNulls
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ChartContainer>
    );
  };

  return (
    <div className="p-5 px-10 pb-20 print:p-0">
      {/* print-only report title */}
      <div className="hidden print:block mb-4">
        <h1 className="text-xl font-semibold">Analytics Report</h1>
        <p className="text-xs text-neutral-500">
          Generated: {moment().format("MMMM Do YYYY, h:mm a")}
        </p>
      </div>
      <UserProfile id={slug} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 print:grid-cols-1 gap-5 mt-6">
        <div className="lg:col-span-2 print:col-span-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h4 className="text-lg font-medium">Profile Performance</h4>
              <p className="text-xs text-neutral-500">
                {lastUpdated
                  ? `Last updated: ${moment(lastUpdated).format("MMMM Do YYYY, h:mm a")}`
                  : "No analytics snapshot yet"}
              </p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="px-3 py-1.5 rounded-md bg-primary hover:bg-primary/90 text-sm text-white disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed flex items-center gap-2 print:hidden"
            >
              {isRefreshing ? (
                <LoaderIcon className="size-4 animate-spin" />
              ) : (
                <RefreshCw className="size-4" />
              )}
              {isRefreshing ? "Refreshing..." : "Refresh now"}
            </button>
          </div>
          {isRefreshError && (
            <p className="mt-2 text-xs text-red-500 print:hidden">
              Refresh failed:{" "}
              {refreshError?.data?.message ||
                (refreshError?.status === 504
                  ? "The server timed out. Try again."
                  : "Unknown error. Check the backend logs.")}
            </p>
          )}
          {/* platform tabs */}
          <div className="mt-3 print:hidden">
            <Tabs
              value={platform}
              onValueChange={setPlatform}
              className={cn("bg-secondary-50 rounded-lg")}
            >
              <TabsList
                className={cn("bg-transparent py-1 px-1 h-auto flex-wrap")}
              >
                {platformTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={cn(tabTriggerClass)}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          {/* metric switch */}
          <div className="mt-3 flex flex-wrap gap-2 print:hidden">
            {metricOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setMetric(option.value)}
                className={cn(
                  "px-3 py-1 rounded-full border text-xs cursor-pointer transition-colors",
                  metric === option.value
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-600 hover:bg-neutral-100",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
          <p className="hidden print:block mt-2 text-sm text-neutral-600">
            {platformTabs.find((tab) => tab.value === platform)?.label} ·{" "}
            {metricOptions.find((option) => option.value === metric)?.label}{" "}
            (last six months)
          </p>
          {/* chart */}
          <div className="my-4 bg-white rounded-lg border p-4 break-inside-avoid">
            {renderChart()}
          </div>
        </div>
        <div className="border rounded-lg bg-white flex flex-col gap-1 break-inside-avoid">
          <h1 className="text-sm font-semibold p-5 pb-2">
            Overall Analytics
            <span className="block text-xs font-normal text-neutral-500">
              Followers by account
            </span>
          </h1>
          <PieForOverPerformance accounts={accounts} />
          <div className="border-t p-3 print:hidden">
            <button
              onClick={handleDownload}
              disabled={isFetching || accounts.length === 0}
              className="border w-full p-2 rounded-md text-sm text-neutral-600 hover:bg-neutral-100 transition-all duration-300 flex items-center gap-2 justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CloudDownload size={18} /> Download Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
