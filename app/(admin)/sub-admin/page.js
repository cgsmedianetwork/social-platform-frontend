"use client";
import CustomCombobox from "@/components/CustomComboBox/CustomComboBox";
import CustomInput from "@/components/Inputs/CustomInput";
import { Form } from "@/components/ui/form";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDebounce } from "@/hooks/useDebounce";
import {
  useAssignSubAdminMutation,
  useGetAdminUserListQuery,
  useGetSubAdminListQuery,
  useRemoveSubAdminMutation,
} from "@/Redux/Features/Auth/AuthApiSlice";
import { Loader, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const SubAdminPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [assignSearchTerm, setAssignSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [assignSubAdmin, { isLoading: isAssigning }] =
    useAssignSubAdminMutation();
  const [removeSubAdmin, { isLoading: isRemoving }] =
    useRemoveSubAdminMutation();

  const debouncedSearch = useDebounce(searchTerm, 800);
  const debouncedAssignSearch = useDebounce(assignSearchTerm, 800);

  // sub admin fetching
  const { data, isFetching } = useGetSubAdminListQuery({
    searchTerm: debouncedSearch,
    page,
    limit,
  });
  const { data: usersData, isFetching: isUsersFetching } =
    useGetAdminUserListQuery({
      searchTerm: debouncedAssignSearch,
      page: 1,
      limit: 10,
    });
  const subAdmins = data?.data?.data || [];
  const meta = data?.data?.meta;
  const totalPages = Math.ceil((meta?.total || 0) / limit);
  console.log(subAdmins);
  console.log(meta);
  console.log(totalPages);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  // assign sub-admin fetching
  const userOptions =
    usersData?.data?.data?.map((user) => ({
      label: user.name || "Unknown User",
      email: user.email || user.phone,
      value: user._id,
    })) || [];

  const handleAssign = async (event) => {
    event.preventDefault();
    // console.log(selectedUserId);
    // return;
    if (!selectedUserId) {
      toast.error("Please select a user first");
      return;
    }
    try {
      const res = await assignSubAdmin({ userId: selectedUserId }).unwrap();
      toast.success(res?.message || "Sub-admin assigned successfully");
      setSelectedUserId("");
      setAssignSearchTerm("");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to assign sub-admin");
    }
  };

  const handleRemove = async (userId) => {
    try {
      const res = await removeSubAdmin(userId)?.unwrap();
      toast.success(res?.message || "Sub-admin removed successfully");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to remove sub-admin");
    }
  };

  const getPaginationItems = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
    if (page <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }
    if (page >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [1, "...", page - 1, page, page + 1, "...", totalPages];
  };
  const paginationItems = getPaginationItems();

  return (
    <div className="p-4 px-12 pb-20">
      <h1 className="text-lg font-semibold ">Sub-Admin Management</h1>

      <div className="mt-5 px-6">
        {/* search  */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-700 font-medium">
            Current Sub-Admins
          </p>
          <div className="relative">
            <CustomInput
              placeholder="name, email or phone"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              inputClass="pl-8"
            />
            <Search
              size={16}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>
        {/* table  */}
        <Table className="bg-white rounded-lg overflow-hidden mt-5">
          <TableHeader className="[&_tr]:border-b-0 overflow-hidden  bg-secondary-100">
            <TableRow>
              <TableHead className="pl-5">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className={"px-5"}>Phone</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isFetching ? (
              <TableRow>
                <TableCell colSpan={4} className="py-8 text-center">
                  <Loader size={20} className="animate-spin mx-auto" />
                </TableCell>
              </TableRow>
            ) : subAdmins?.length > 0 ? (
              subAdmins?.map((user) => (
                <TableRow key={user._id}>
                  <TableCell className="pl-5">{user.name || "N/A"}</TableCell>
                  <TableCell>{user.email || "N/A"}</TableCell>
                  <TableCell className="text-ellipsis whitespace-break-spaces px-5">
                    {user.phone || "N/A"}
                  </TableCell>
                  <TableCell className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => handleRemove(user._id)}
                      disabled={isRemoving}
                      className="py-2 px-4 rounded-full hover:bg-gray-200 cursor-pointer text-sm font-medium text-red-500 flex items-center gap-2"
                    >
                      {/* <Trash2 size={20} /> */}
                      {isRemoving && (
                        <Loader size={14} className="animate-spin" />
                      )}
                      {!isRemoving ? "Remove" : "Removing"}
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="py-8 text-center">
                  No sub-admins found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {/* pagination  */}
        {totalPages > 1 && (
          <Pagination className="mt-6">
            <PaginationContent>
              {paginationItems.map((item, index) => (
                <PaginationItem key={`${item}-${index}`}>
                  {item === "..." ? (
                    <span className="px-3 text-gray-500">...</span>
                  ) : (
                    <PaginationLink
                      href="#"
                      isActive={item === page}
                      onClick={(event) => {
                        event.preventDefault();
                        setPage(item);
                      }}
                    >
                      {item}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        )}
      </div>

      {/* add new sub-admin  */}
      <div className="mt-8 px-6">
        <p className="text-base text-neutral-700 font-bold">
          Add New Sub-Admin
        </p>
        <Form>
          <form
            onSubmit={handleAssign}
            className="mt-4 w-full flex flex-col gap-3"
          >
            <div className="sm:w-1/2 w-full">
              <CustomCombobox
                label="Search and Select"
                searchPlaceholder="Search by name, email or phone"
                searchTerm={assignSearchTerm}
                setSearchTerm={setAssignSearchTerm}
                loading={isUsersFetching}
                field={{
                  value: selectedUserId,
                  onChange: setSelectedUserId,
                }}
                data={userOptions}
              />
            </div>
            <div className="mt-1">
              <button
                type="submit"
                disabled={isAssigning}
                className="bg-brand-500 text-sm font-medium px-4 py-2 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAssigning ? (
                  <span className="flex items-center gap-2">
                    <Loader size={20} className="animate-spin" /> Adding...{" "}
                  </span>
                ) : (
                  "Add"
                )}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SubAdminPage;
