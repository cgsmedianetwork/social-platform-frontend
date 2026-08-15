"use client";

import {
  useGetAdminAccountAnalyticsQuery,
  useRefreshAdminAccountAnalyticsMutation,
} from "@/Redux/Features/analytics/analyticsApiSlice";
import { AnalyticsUpIcon } from "hugeicons-react";
import { LoaderIcon } from "lucide-react";
import moment from "moment";
import AnalyticsReportCard from "../Cards/AnalyticsReportCard";

const AdminAnalytics = ({ userId }) => {
  const { data, isFetching, isError, error, refetch } =
    useGetAdminAccountAnalyticsQuery(userId);
  const accounts = data?.data?.accounts || [];
  const lastUpdated = data?.data?.lastUpdated;
  // console.log(accounts);

  const [refreshAnalytics, { isLoading: isRefreshing }] =
    useRefreshAdminAccountAnalyticsMutation();

  const handleRefresh = async () => {
    try {
      await refreshAnalytics(userId).unwrap();
      refetch();
    } catch (error) {
      console.error("Refresh analytics failed:", error);
    }
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-base sm:text-lg font-medium flex items-center gap-1 sm:gap-2">
            <AnalyticsUpIcon className="size-5 sm:size-6" /> Account Analytics
          </h1>
          <p className="text-xs text-neutral-500">
            {lastUpdated
              ? `Last updated: ${moment(lastUpdated).format("MMMM Do YYYY, h:mm:ss a")}`
              : "No analytics snapshot yet"}
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="px-2 sm:px-3 py-1.5  rounded-md bg-primary hover:bg-primary/90 text-sm text-white disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
        >
          {isRefreshing ? (
            <span className="flex items-center gap-2 ">
              <LoaderIcon className="w-4 h-4 animate-spin" /> Refreshing...
            </span>
          ) : (
            "Refresh now"
          )}
        </button>
      </div>
      {isFetching ? (
        <p className="py-10 text-center text-neutral-500">
          Loading analytics...
        </p>
      ) : isError ? (
        <p className="py-10 text-center text-red-500">
          {error?.data?.message || "Failed to load analytics"}
        </p>
      ) : accounts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5 mt-5">
          {accounts.map((account) => (
            <AnalyticsReportCard
              key={`${account.provider}-${account.providerId}`}
              account={account}
            />
          ))}
          {/* nb */}
          <p className="text-xs text-end col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2">
            N.B: Some data may be missing because of platform restriction.{" "}
            <span className="text-red-600">*</span>{" "}
          </p>
        </div>
      ) : (
        <p className="py-10 text-center text-neutral-500">
          No connected account analytics found. Click refresh after connecting
          accounts.
        </p>
      )}
    </div>
  );
};

export default AdminAnalytics;
