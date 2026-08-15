"use client";
import AdminScheduleContent from "@/components/AdminScheduleContent/AdminScheduleContent";
import AdminRequestMeeting from "@/components/RequestMeeting/AdminRequestMeeting";
import { CalendarProvider } from "@/components/ui/shadcn-io/calendar";

const statusColorMap = {
  pending: "#F59E0B",
  confirmed: "#10B981",
  rejected: "#EF4444",
  completed: "#6B7280",
};

const SchedulePage = () => {
  return (
    <div className="p-2.5 sm:p-6 sm:px-6 max-w-[1200px] xl:mx-auto w-full pb-10">
      <div className="flex items-center justify-between">
        <h1 className=" text-base sm:text-xl md:text-2xl font-semibold ">
          {" "}
          Meeting Schedule
        </h1>
        <AdminRequestMeeting />
      </div>
      {/* status color */}
      <div className="flex flex-wrap items-center justify-end sm:gap-4 gap-2 mt-2.5 sm:mt-5 mb-2">
        <div className="flex items-center gap-1 text-xs">
          <span className="h-2 w-2 rounded-full inline-block bg-[#F59E0B]"></span>{" "}
          Pending
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="h-2 w-2 rounded-full inline-block bg-[#10B981]"></span>{" "}
          Confirmed
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="h-2 w-2 rounded-full inline-block bg-[#EF4444]"></span>{" "}
          Rejected
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="h-2 w-2 rounded-full inline-block bg-[#6B7280]"></span>{" "}
          Completed
        </div>
      </div>
      <div className=" w-full border  rounded-lg overflow-hidden">
        <CalendarProvider>
          <AdminScheduleContent />
        </CalendarProvider>
      </div>
    </div>
  );
};

export default SchedulePage;
