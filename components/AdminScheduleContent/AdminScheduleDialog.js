"use client";

import { useUpdateMeetingStatusMutation } from "@/Redux/Features/meetings/meetingApiSlice";
import moment from "moment";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const AdminScheduleDialog = ({ open, setOpen, data }) => {
  const [updateStatus] = useUpdateMeetingStatusMutation();
  const formatDate = data?.[0]?.startAt
    ? moment(data[0].startAt).format("MMMM Do")
    : "";

  const handleStatusChange = async (bookingId, status) => {
    try {
      const res = await updateStatus({ bookingId, status }).unwrap();
      toast.success(res?.message || "Status updated");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update status");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border py-3.5 max-h-[80vh] !max-w-3xl overflow-y-auto min-h-[200px]">
        <DialogTitle className="text-base font-medium text-center text-neutral-600">
          {data?.length
            ? `${data.length} Meeting${data.length > 1 ? "s" : ""} on ${formatDate}`
            : "No Meetings Found"}
        </DialogTitle>

        {!!data?.length && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Admin</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((meeting) => (
                <TableRow key={meeting.id}>
                  <TableCell className="text-xs">
                    {moment(meeting.startAt).format("h:mm a")} -{" "}
                    {moment(meeting.endAt).format("h:mm a")}
                  </TableCell>
                  <TableCell className="text-xs">
                    {meeting.user?.name ||
                      meeting.user?.email ||
                      meeting.user?.phone ||
                      "N/A"}
                  </TableCell>
                  <TableCell className="text-xs">
                    {meeting.admin?.name || meeting.admin?.email || "N/A"}
                  </TableCell>
                  <TableCell className="text-xs whitespace-normal break-words">
                    {meeting.description}
                  </TableCell>
                  <TableCell className="flex justify-center">
                    <Select
                      defaultValue={meeting.status?.name}
                      onValueChange={(value) =>
                        handleStatusChange(meeting.id, value)
                      }
                    >
                      <SelectTrigger className="h-8 text-xs rounded-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending" className={``}>
                          Pending
                        </SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AdminScheduleDialog;
