"use client";
import { cn } from "@/lib/utils";
import { useGetAdminAndSubAdminQuery } from "@/Redux/Features/Auth/AuthApiSlice";
import { useCreateMeetingMutation } from "@/Redux/Features/meetings/meetingApiSlice";
import BookingMeetingSchema from "@/Schema/BookingMeetingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Skeleton } from "../ui/skeleton";
import { Spinner } from "../ui/spinner";



const RequestMeeting = ({ className, title, buttonText }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();
  const [createMeeting, { isLoading: isCreateMeetingLoading }] =
    useCreateMeetingMutation();
  const { data, isLoading: isAdminAndSubAdminLoading } =
    useGetAdminAndSubAdminQuery(undefined, {
      skip: !open,
    });
  // console.log(data);
  const form = useForm({
    resolver: zodResolver(BookingMeetingSchema),
    defaultValues: {
      meetingWith: "",
      time: undefined,
    }
  });

  // on submit function
  async function onSubmit(data) {
    // console.log(data);
    try {
      const response = await createMeeting(data).unwrap();
      // console.log(response);
      if (response?.success) {
        toast.success(response?.message || "Meeting requested successfully!");
        setOpen(false);
        form.reset();
      } else {
        toast.error(response?.message || "Failed to request meeting!");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error?.data?.message || "Failed to request meeting!");
    }
  }

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  function handleDateSelect(date) {
    if (date) {
      form.setValue("time", date, {shouldValidate: true, shouldDirty: true});
    }
  }
  function handleTimeChange(type, value) {
    const currentDate = form.getValues("time") || new Date();
    let newDate = new Date(currentDate);

    if (type === "hour") {
      const hour = parseInt(value, 10);
      newDate.setHours(newDate.getHours() >= 12 ? hour + 12 : hour);
    } else if (type === "minute") {
      newDate.setMinutes(parseInt(value, 10));
    } else if (type === "ampm") {
      const hours = newDate.getHours();
      if (value === "AM" && hours >= 12) {
        newDate.setHours(hours - 12);
      } else if (value === "PM" && hours < 12) {
        newDate.setHours(hours + 12);
      }
    }

    form.setValue("time", newDate, {shouldValidate: true, shouldDirty: true});
    // console.log("time changing...")
  }

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "flex items-center gap-1 px-3 py-1.5 border-2 border-brand-500 rounded-md text-sm font-semibold cursor-pointer",
          className
        )}
      >
        <Plus size={18} strokeWidth={2.5} /> {title || "Book a Meeting"}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={cn("border py-3.5 ")}>
          <DialogTitle
            className={"text-base font-medium text-center text-neutral-600 "}
          >
            Book a Meeting
          </DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              {/* meeting with  */}
              <div>
                <FormField
                  control={form.control}
                  name="meetingWith"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={
                          "text-neutral-600 text-sm font-medium inline-block "
                        }
                      >
                        Select Meeting With
                        <span className="text-red-600">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className={"w-full !py-5"}>
                          <SelectValue placeholder={"Select meeting with"} />
                        </SelectTrigger>
                        <SelectContent>
                          {isAdminAndSubAdminLoading ? (
                            <Skeleton className="w-full h-10" />
                          ) : (
                            data?.data?.map((item) => (
                              <SelectItem key={item?.id} value={item?.id}>
                                {item?.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* meeting time  */}
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={
                        "text-neutral-600 text-sm font-medium inline-block"
                      }
                    >
                      Select Meeting Time
                      <span className="text-red-600">*</span>
                    </FormLabel>
                    <div className="sm:flex gap-4 border rounded-md">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={handleDateSelect}
                        initialFocus
                        className={"rounded-md"}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today;
                        }}
                      />
                      <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                        <ScrollArea className="w-64 sm:w-auto">
                          <p className="sticky top-0 bg-white z-10 py-2 text-center text-sm font-semibold">
                            Hour
                          </p>
                          <div className="flex sm:flex-col p-2">
                            {Array.from({ length: 12 }, (_, i) => i + 1)
                              .reverse()
                              .map((hour) => (
                                <Button
                                  key={hour}
                                  size="icon"
                                  variant={
                                    field.value &&
                                    field.value.getHours() % 12 === hour % 12
                                      ? "default"
                                      : "ghost"
                                  }
                                  className="sm:w-full shrink-0 aspect-square"
                                  onClick={() =>
                                    handleTimeChange("hour", hour.toString())
                                  }
                                  type="button"
                                >
                                  {hour}
                                </Button>
                              ))}
                          </div>
                          <ScrollBar
                            orientation="horizontal"
                            className="sm:hidden"
                          />
                        </ScrollArea>
                        <ScrollArea className="w-64 sm:w-auto">
                          <p className="sticky top-0 bg-white z-10 py-2 text-center text-sm font-semibold">
                            Min
                          </p>
                          <div className="flex sm:flex-col p-2">
                            {Array.from({ length: 6 }, (_, i) => i * 10).map(
                              (minute) => (
                                <Button
                                  key={minute}
                                  size="icon"
                                  variant={
                                    field.value &&
                                    field.value.getMinutes() === minute
                                      ? "default"
                                      : "ghost"
                                  }
                                  className="sm:w-full shrink-0 aspect-square"
                                  onClick={() =>
                                    handleTimeChange(
                                      "minute",
                                      minute.toString()
                                    )
                                  }
                                  type="button"
                                >
                                  {minute.toString().padStart(2, "0")}
                                </Button>
                              )
                            )}
                          </div>
                          <ScrollBar
                            orientation="horizontal"
                            className="sm:hidden"
                          />
                        </ScrollArea>
                        <ScrollArea className="">
                          <div className="flex sm:flex-col p-2">
                            {["AM", "PM"].map((ampm) => (
                              <Button
                                key={ampm}
                                size="icon"
                                variant={
                                  field.value &&
                                  ((ampm === "AM" &&
                                    field.value.getHours() < 12) ||
                                    (ampm === "PM" &&
                                      field.value.getHours() >= 12))
                                    ? "default"
                                    : "ghost"
                                }
                                className="sm:w-full shrink-0 aspect-square"
                                onClick={() => handleTimeChange("ampm", ampm)}
                                type="button"
                              >
                                {ampm}
                              </Button>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                  { isCreateMeetingLoading ? <span className="flex items-center justify-center gap-2"><Spinner className={"size-3"}/> Requesting...</span> : buttonText || "Request"}
                </button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RequestMeeting;
