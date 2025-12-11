"use client";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import {
  CalendarBody,
  CalendarHeader,
  CalendarItem,
  CalendarProvider,
} from "@/components/ui/shadcn-io/calendar";
import { faker } from "@faker-js/faker";
import { Plus } from "lucide-react";

const page = () => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const statuses = [
    { id: faker.string.uuid(), name: "Planned", color: "#6B7280" },
    { id: faker.string.uuid(), name: "In Progress", color: "#F59E0B" },
    { id: faker.string.uuid(), name: "Done", color: "#10B981" },
  ];

  const exampleFeatures = Array.from({ length: 20 })
    .fill(null)
    .map(() => ({
      id: faker.string.uuid(),
      name: capitalize(faker.company.buzzPhrase()),
      startAt: faker.date.past({ years: 0.5, refDate: new Date() }),
      endAt: faker.date.future({ years: 0.5, refDate: new Date() }),
      status: faker.helpers.arrayElement(statuses),
    }));

  return (
    <div className="w-full">
      <div className="w-full border-b border-[#EAECF0]">
        <DashboardNavbar />
      </div>
      <div className="w-full custom-container flex items-center justify-between mt-5">
        <h1 className="text-lg font-semibold mt-4">Booking Schedule</h1>
        <button className="flex items-center gap-1 px-3 py-2 bg-brand-500 rounded-md text-sm font-semibold">
          <Plus size={18} strokeWidth={2.5} /> Book a new meeting
        </button>
      </div>
      <div className="w-full custom-container">
        <div className=" w-full border mt-8 rounded-lg">
          <CalendarProvider>
            <CalendarHeader />
            <CalendarBody features={exampleFeatures}>
              {({ feature }) => (
                <CalendarItem feature={feature} key={feature.id} />
              )}
            </CalendarBody>
          </CalendarProvider>
        </div>
      </div>
    </div>
  );
};

export default page;
