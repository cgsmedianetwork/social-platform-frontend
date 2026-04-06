"use client";
import combineDateAndTime from "@/helper/CombineDateAndTime";
import { cn } from "@/lib/utils";
import { useGetAdminAndSubAdminQuery } from "@/Redux/Features/Auth/AuthApiSlice";
import { useCreateMeetingMutation } from "@/Redux/Features/meetings/meetingApiSlice";
import BookingMeetingSchema from "@/Schema/BookingMeetingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon, Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Skeleton } from "../ui/skeleton";
import { Spinner } from "../ui/spinner";
import { Textarea } from "../ui/textarea";

const RequestMeeting = ({ className, title, buttonText }) => {
  const [open, setOpen] = useState(false);
  const [openDate, setOpenDate] = useState(false);
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
      date: new Date(),
      startTime: "01:30:00",
      endTime: "02:00:00",
      description: "",
    },
  });

  // on submit function
  async function onSubmit(data) {
    // console.log(data);
    data.startTime = combineDateAndTime(data.date, data.startTime);
    data.endTime = combineDateAndTime(data.date, data.endTime);
    console.log(data);
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

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "flex items-center gap-1 px-3 py-1.5 border-2 border-brand-500 rounded-md text-sm font-semibold cursor-pointer",
          className,
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                        <SelectTrigger className={"w-full !py-4"}>
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
              {/* time picker */}
              <div className="flex gap-4 ">
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
                          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2  w-1/2">
                  <Label htmlFor="endTime" className="gap-0">
                    End Time <span className="text-red-600">*</span>
                  </Label>
                  <FormField
                    control={form.control}
                    name="endTime"
                    render={({ field }) => (
                      <FormItem>
                        <Input
                          type="time"
                          id="endTime"
                          step="1"
                          // defaultValue="02:30:00"
                          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              {/* description  */}
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="description" className="gap-0">
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
                      <Spinner className={"size-3"} /> Requesting...
                    </span>
                  ) : (
                    buttonText || "Request"
                  )}
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
