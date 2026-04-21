"use client";
import CalenderContent from "@/components/CalenderContent/CalenderContent";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import RequestMeeting from "@/components/RequestMeeting/RequestMeeting";
import { CalendarProvider } from "@/components/ui/shadcn-io/calendar";

const BookingSchedulePage = () => {
  return (
    <div className="w-full">
      <div className="w-full border-b border-[#EAECF0]">
        <DashboardNavbar />
      </div>
      <div className="w-full custom-container flex items-center justify-between mt-4">
        <h1 className="text-lg font-semibold mt-4">Schedule Meeting</h1>
        <RequestMeeting />
      </div>
      <div className="w-full custom-container">
        <div className=" w-full border mt-8 mb-12 rounded-lg">
          <CalendarProvider className={""}>
            <CalenderContent />
          </CalendarProvider>
        </div>
      </div>
    </div>
  );
};

export default BookingSchedulePage;
