"use client";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const FormSchema = z.object({
  time: z.date({
    required_error: "A date and time is required.",
  }),
});

const RequestMeeting = ({ className, title, buttonText }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data) {
    // console.log(data);
  }
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  function handleDateSelect(date) {
    if (date) {
      form.setValue("time", date);
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

    form.setValue("time", newDate);
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
        <DialogContent className={cn("w-fit p-4")}>
          <DialogTitle
            className={cn(
              "text-base font-medium text-center text-neutral-600 "
            )}
          >
            Pick up a date and time
          </DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <div className="sm:flex border rounded-md">
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
                          <div className="flex sm:flex-col p-2">
                            {Array.from({ length: 12 }, (_, i) => i * 5).map(
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
                  {buttonText || "Request"}
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
