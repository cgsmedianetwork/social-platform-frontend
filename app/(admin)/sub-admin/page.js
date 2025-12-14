import CustomInput from "@/components/Inputs/CustomInput";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";

const SubAdminPage = () => {
  const permissions = [
    {
      name: "Analytics view",
      value: "analytics_view",
    },
    {
      name: "Dashboard view",
      value: "dashboard_view",
    },
    {
      name: "User management",
      value: "user_management",
    },
    {
      name: "Social media management",
      value: "social_media_management",
    },
  ];
  return (
    <div className="p-4 px-12 pb-20">
      <h1 className="text-lg font-semibold ">Sub-Admin Management</h1>
      <div className="mt-5 px-6">
        <p className="text-sm text-neutral-700 font-medium">
          Current Sub-Admins
        </p>
        <Table className="bg-white rounded-lg overflow-hidden mt-5">
          <TableHeader className="[&_tr]:border-b-0 overflow-hidden  bg-secondary-100">
            <TableRow>
              <TableHead className="pl-5">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className={"px-5"}>Phone</TableHead>
              <TableHead className="">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="pl-5">Sara Anika</TableCell>
              <TableCell>saraanika@gmail.com</TableCell>
              <TableCell
                className={"text-ellipsis whitespace-break-spaces px-5"}
              >
                +8801712345678
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <button className="p-2 rounded hover:bg-gray-200 cursor-pointer">
                    <Trash2 size={20} />
                  </button>
                  <button className="p-2 rounded hover:bg-gray-200 flex items-center gap-1 cursor-pointer">
                    <SquarePen size={20} />
                    Edit
                  </button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="pl-5">Sara Anika</TableCell>
              <TableCell>saraanika@gmail.com</TableCell>
              <TableCell
                className={"text-ellipsis whitespace-break-spaces px-5"}
              >
                +8801712345678
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <button className="p-2 rounded hover:bg-gray-200 cursor-pointer">
                    <Trash2 size={20} />
                  </button>
                  <button className="p-2 rounded hover:bg-gray-200 flex items-center gap-1 cursor-pointer">
                    <SquarePen size={20} />
                    Edit
                  </button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="mt-8 px-6">
        <p className="text-sm text-neutral-700 font-medium">
          Add New Sub-Admin
        </p>
        <form action="" className="mt-4 w-full flex flex-col gap-3">
          <CustomInput
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
            className={"sm:!w-1/2 !w-full "}
          />
          {/* <div>
            <label
              htmlFor="permission"
              className="text-neutral-600 text-sm font-medium"
            >
              Assign Permissions
            </label>
            <div className="w-full sm:w-1/2 grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-2">
                <Checkbox id="analytics_view" />
                <label
                  htmlFor="analytics_view"
                  className="text-neutral-600 text-sm font-medium cursor-pointer"
                >
                  Analytics view
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="analytics_view" />
                <label
                  htmlFor="analytics_view"
                  className="text-neutral-600 text-sm font-medium cursor-pointer"
                >
                  Analytics view
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="analytics_view" />
                <label
                  htmlFor="analytics_view"
                  className="text-neutral-600 text-sm font-medium cursor-pointer"
                >
                  Analytics view
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="analytics_view" />
                <label
                  htmlFor="analytics_view"
                  className="text-neutral-600 text-sm font-medium cursor-pointer"
                >
                  Analytics view
                </label>
              </div>
            </div>
          </div> */}
          <div className="mt-3">
            <button
              type="submit"
              className="bg-brand-500 text-sm font-medium px-4 py-2 rounded-md"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubAdminPage;
