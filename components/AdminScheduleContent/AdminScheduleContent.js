"use client";

import { cn } from "@/lib/utils";
import { useGetAdminMeetingBookingsQuery } from "@/Redux/Features/meetings/meetingApiSlice";
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
import AdminScheduleDialog from "./AdminScheduleDialog";

export const statusColorMap = {
  pending: "#F59E0B",
  confirmed: "#10B981",
  rejected: "#EF4444",
  completed: "#6B7280",
};

const AdminScheduleContent = () => {
  const [month] = useCalendarMonth();
  const [year] = useCalendarYear();
  const [selectedDay, setSelectedDay] = useState(null);
  const [open, setOpen] = useState(false);

  const { startDate, endDate } = useMemo(
    () => ({
      startDate: new Date(year, month, 1).toISOString(),
      endDate: new Date(year, month + 1, 0, 23, 59, 59, 999).toISOString(),
    }),
    [month, year],
  );

  const { data, isLoading } = useGetAdminMeetingBookingsQuery({
    startDate,
    endDate,
  });

  const features = useMemo(() => {
    return (data?.data || []).map((booking) => ({
      id: booking._id,
      name: booking.userId?.name || booking.userId?.email || "User Meeting",
      startAt: new Date(booking.startTime),
      endAt: new Date(booking.endTime),
      description: booking.description || "",
      user: booking.userId,
      admin: booking.meetingWith,
      status: {
        name: booking.status,
        color: statusColorMap[booking.status] || "#6B7280",
      },
    }));
  }, [data]);

  const selectedMeetings = useMemo(() => {
    if (!selectedDay) return [];

    return features.filter((feature) => {
      const date = new Date(feature.startAt);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === selectedDay
      );
    });
  }, [features, selectedDay, month, year]);

  return (
    <>
      <CalendarDate>
        <div className="flex items-center sm:gap-3 gap-2">
          <CalendarMonthPicker className={cn("w-auto text-xs sm:text-xs")} />
          <CalendarYearPicker
            start={2025}
            end={2050}
            className={cn("w-auto text-xs sm:text-xs")}
          />
        </div>
        <CalendarDatePagination />
      </CalendarDate>

      <CalendarHeader className="bg-brand-100 !overflow-hidden" />

      <CalendarBody
        features={features}
        onDayClick={(day) => {
          setSelectedDay(day);
          setOpen(true);
        }}
      >
        {({ feature }) => <CalendarItem feature={feature} key={feature.id} />}
      </CalendarBody>

      {isLoading && (
        <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
          Loading bookings...
        </div>
      )}

      <AdminScheduleDialog
        open={open}
        setOpen={setOpen}
        data={selectedMeetings}
      />
    </>
  );
};

export default AdminScheduleContent;
