import { TradeUpIcon } from "hugeicons-react";

const TotalUser = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-md px-5 py-1 divide-y ">
      <div className="flex justify-between py-3">
        <div className="">
          <p className="text-base font-medium text-neutral-600">Total Users</p>
          <p className="flex items-center gap-2 text-xs text-neutral-500 mt-1.5">
            <span className="text-chart-2 flex items-center gap-1 font-medium ">
              <TradeUpIcon size={20} strokeWidth={2.5} />
              10%
            </span>{" "}
            <span>vs last month</span>
          </p>
        </div>
        <p className="text-base font-semibold">106</p>
      </div>
      <div className="flex justify-between py-3">
        <div className="">
          <p className="text-base font-medium text-neutral-600">Facebook</p>
          <p className="flex items-center gap-2 text-xs text-neutral-500 mt-1.5">
            <span className="text-chart-2 flex items-center gap-1 font-medium ">
              <TradeUpIcon size={20} strokeWidth={2.5} />
              10%
            </span>{" "}
            <span>vs last month</span>
          </p>
        </div>
        <p className="text-base font-semibold">30</p>
      </div>
      <div className="flex justify-between py-3">
        <div className="">
          <p className="text-base font-medium text-neutral-600">Youtube</p>
          <p className="flex items-center gap-2 text-xs text-neutral-500 mt-1.5">
            <span className="text-chart-2 flex items-center gap-1 font-medium ">
              <TradeUpIcon size={20} strokeWidth={2.5} />
              10%
            </span>{" "}
            <span>vs last month</span>
          </p>
        </div>
        <p className="text-base font-semibold">20</p>
      </div>
      <div className="flex justify-between py-3">
        <div className="">
          <p className="text-base font-medium text-neutral-600">Instagram</p>
          <p className="flex items-center gap-2 text-xs text-neutral-500 mt-1.5">
            <span className="text-chart-2 flex items-center gap-1 font-medium ">
              <TradeUpIcon size={20} strokeWidth={2.5} />
              10%
            </span>{" "}
            <span>vs last month</span>
          </p>
        </div>
        <p className="text-base font-semibold">56</p>
      </div>
      <div className="flex justify-between py-3">
        <div className="">
          <p className="text-base font-medium text-neutral-600">Tiktok</p>
          <p className="flex items-center gap-2 text-xs text-neutral-500 mt-1.5">
            <span className="text-chart-2 flex items-center gap-1 font-medium ">
              <TradeUpIcon size={20} strokeWidth={2.5} />
              10%
            </span>{" "}
            <span>vs last month</span>
          </p>
        </div>
        <p className="text-base font-semibold">06</p>
      </div>
    </div>
  );
};

export default TotalUser;
