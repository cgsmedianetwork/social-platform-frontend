"use client";
import { useGetUserMeetingBookingsQuery } from "@/Redux/Features/meetings/meetingApiSlice";
import { useMemo, useState } from "react";
import {
  CalendarBody,
  CalendarDate,
  CalendarDatePagination,
  CalendarHeader,
  CalendarItem,
  CalendarMonthPicker,
  CalendarYearPicker,
  useCalendarMonth,
  useCalendarYear,
} from "../ui/shadcn-io/calendar";

const statusColorMap = {
  pending: "#F59E0B",
  confirmed: "#10B981",
  rejected: "#EF4444",
  completed: "#6B7280",
};

const CalenderContent = () => {
  const [month] = useCalendarMonth();
  const [year] = useCalendarYear();
  const [selectedDay, setSelectedDay] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { startDate, endDate } = useMemo(() => {
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0, 23, 59, 59, 999);
    return {
      startDate: start.toISOString(),
      endDate: end.toISOString(),
    };
  }, [month, year]);

  // console.log("startDate and endDate", startDate, endDate);
  const { data, isLoading } = useGetUserMeetingBookingsQuery({
    startDate,
    endDate,
  });

  console.log("meetingBookings", data);

  const features = useMemo(() => {
    if (!data?.data) return [];
    return data.data.map((booking) => ({
      id: booking._id,
      name: `With ${booking.meetingWith?.name} ` || "Meeting",
      startAt: new Date(booking.startTime),
      endAt: new Date(booking.endTime),
      description: booking.description || "",
      status: {
        name: booking.status,
        color: statusColorMap[booking.status] || "#6B7280",
      },
    }));
  }, [data]);

  const selectedDayFeatures = useMemo(() => {
    if (selectedDay === null) return [];
    return features.filter((feature) => {
      const featureDate = new Date(feature.startAt);
      return (
        featureDate.getFullYear() === year &&
        featureDate.getMonth() === month &&
        featureDate.getDate() === selectedDay
      );
    });
  }, [selectedDay, features, year, month]);

  console.log("exampleFeatures", features);

  const handleDayClick = (day) => {
    console.log("day clicked!!", day);
    setSelectedDay(day);
    setDialogOpen(true);
  };

  return (
    <>
      <CalendarDate>
        <div className="flex items-center gap-3">
          <CalendarMonthPicker />
          <CalendarYearPicker start={2025} end={2040} />
        </div>
        <CalendarDatePagination />
      </CalendarDate>
      <CalendarHeader className="bg-brand-100 !overflow-hidden" />
      <CalendarBody features={features} onDayClick={handleDayClick}>
        {({ feature }) => (
          <CalendarItem
            feature={feature}
            key={feature.id}
            // className={"bg-brand-100"}
          />
        )}
      </CalendarBody>
      {isLoading && (
        <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
          Loading bookings...
        </div>
      )}
    </>
  );
};

export default CalenderContent;
