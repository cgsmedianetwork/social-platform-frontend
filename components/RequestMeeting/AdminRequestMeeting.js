"use client";

import combineDateAndTime from "@/helper/CombineDateAndTime";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetAdminUserListQuery } from "@/Redux/Features/Auth/AuthApiSlice";
import { useCreateAdminMeetingMutation } from "@/Redux/Features/meetings/meetingApiSlice";
import AdminBookingSchema from "@/Schema/AdminBookingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import CustomCombobox from "../CustomComboBox/CustomComboBox";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Spinner } from "../ui/spinner";
import { Textarea } from "../ui/textarea";

const AdminRequestMeeting = () => {
  const [open, setOpen] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 800);
  console.log(debouncedSearchTerm);

  const form = useForm({
    resolver: zodResolver(AdminBookingSchema),
    defaultValues: {
      userId: "",
      date: new Date(),
      startTime: "01:30:00",
      endTime: "02:00:00",
      description: "",
      status: "confirmed",
    },
  });

  const { data, isFetching } = useGetAdminUserListQuery(
    { searchTerm: debouncedSearchTerm, page: 1, limit: 10 },
    { skip: !open },
  );
  // console.log(data?.data?.data);
  const [createAdminMeeting, { isLoading: isCreateMeetingLoading }] =
    useCreateAdminMeetingMutation();

  const onSubmit = async (data) => {
    // console.log(data);
    data.startTime = combineDateAndTime(data.date, data.startTime);
    data.endTime = combineDateAndTime(data.date, data.endTime);

    // console.log(data);
    // return;

    try {
      const res = await createAdminMeeting(data).unwrap();
      console.log(res);
      toast.success(res?.message || "Meeting booked successfully");
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || "Failed to book meeting");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 px-3 py-1.5 border-2 border-brand-500 rounded-md text-sm font-semibold cursor-pointer bg-brand-500"
      >
        Book Meeting
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border py-3.5">
          <DialogTitle className="text-base font-medium text-center text-neutral-600">
            Book Your Meeting Schedule
          </DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              {/* select user  */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="userId" className="gap-0 text-sm">
                  Select User <span className="text-red-600">*</span>
                </Label>
                <FormField
                  control={form.control}
                  name="userId"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative flex flex-col">
                        <CustomCombobox
                          label={"Search and Select User"}
                          searchPlaceholder="Search by name, email or phone"
                          field={field}
                          searchTerm={searchTerm}
                          setSearchTerm={setSearchTerm}
                          data={
                            data?.data?.data?.map((user) => ({
                              label: user.name,
                              email: user.email || user.phone,
                              value: user._id,
                            })) ?? []
                          }
                          loading={isFetching}
                        />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* date picker */}
              <div className="flex w-full flex-col gap-2">
                <Label htmlFor="date" className="gap-0">
                  Date <span className="text-red-600">*</span>
                </Label>
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <Popover open={openDate} onOpenChange={setOpenDate}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            id="date"
                            className="!h-auto !py-2.5w-full justify-between font-normal"
                          >
                            {field.value
                              ? field.value.toLocaleDateString()
                              : "Pick a date"}
                            <ChevronDownIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto overflow-hidden p-0"
                          align="center"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              console.log(date);
                              setOpenDate(false);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* start time and end time */}

              <div className="flex gap-4">
                {/* start time  */}
                <div className="flex flex-col gap-2  w-1/2">
                  <Label htmlFor="startTime" className="gap-0">
                    Start Time <span className="text-red-600">*</span>
                  </Label>
                  <FormField
                    control={form.control}
                    name="startTime"
                    render={({ field }) => (
                      <FormItem>
                        <Input
                          type="time"
                          id="startTime"
                          step="1"
                          // defaultValue="01:30:00"

                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* end time  */}
                <div className="flex flex-col gap-2  w-1/2">
                  <Label htmlFor="endTime" className="gap-0">
                    End Time <span className="text-red-600">*</span>
                  </Label>
                  <FormField
                    control={form.control}
                    name="endTime"
                    render={({ field }) => (
                      <FormItem>
                        <Input type="time" id="endTime" step="1" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* description  */}
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="description" className="">
                  Description
                </Label>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <Textarea
                        id="description"
                        placeholder="Enter description"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="text-sm cursor-pointer font-semibold border-2 border-brand-500 text-neutral-600 px-4 py-1 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-brand-500 text-slate-700 px-4 py-1.5 rounded-md text-sm cursor-pointer font-semibold"
                >
                  {isCreateMeetingLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Spinner className={"size-3"} /> Booking...
                    </span>
                  ) : (
                    "Book Meeting"
                  )}
                </button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminRequestMeeting;
