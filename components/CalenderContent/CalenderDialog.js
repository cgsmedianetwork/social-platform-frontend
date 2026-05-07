"use client";
import { cn } from "@/lib/utils";
import moment from "moment/moment";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const CalenderDialog = ({ open, setOpen, data }) => {
  // console.log(data);
  const formatDate = moment(data?.[0]?.startAt).format("MMMM Do");
  // console.log(formatDate);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border py-3.5 max-h-[80vh] !max-w-xl overflow-y-auto min-h-[200px] ">
        <DialogTitle className="text-base font-medium text-center text-neutral-600 ">
          {data?.length > 0
            ? `${data?.length} Meeting${data?.length > 1 ? "s" : ""} on ${formatDate}`
            : "No Meetings Found"}
        </DialogTitle>
        {data?.length > 0 && (
          <div className="w-full">
            <Table className={"w-full table-auto"}>
              <TableHeader>
                <TableRow className={cn("border-b-0")}>
                  <TableHead className={cn("!text-sm")}>Time</TableHead>
                  <TableHead className={cn("!text-sm")}>Meeting With</TableHead>
                  <TableHead className={cn("!text-sm")}>Description</TableHead>
                  <TableHead className={cn("!text-sm")}>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((meeting) => (
                  <TableRow key={meeting?.id} className={cn("border-dashed")}>
                    <TableCell className={cn("text-xs")}>
                      {moment(meeting?.startAt).format("h:mm a") +
                        " - " +
                        moment(meeting?.endAt).format("h:mm a")}
                    </TableCell>
                    <TableCell className={cn("text-xs ")}>
                      {meeting?.name?.replace(/^with\s+/i, "")}
                    </TableCell>
                    <TableCell
                      className={cn("text-xs whitespace-normal break-word")}
                    >
                      {meeting?.description}
                    </TableCell>
                    <TableCell
                      className={`text-xs text-[${meeting?.status?.color}]`}
                    >
                      {meeting?.status?.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CalenderDialog;
