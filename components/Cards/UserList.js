import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/Assets/svgs/socialIcons";
import { cn } from "@/lib/utils";
import { ListFilter, Search } from "lucide-react";
import Image from "next/image";
import userImage from "../../Assets/images/testimonial image.webp";
import CustomInput from "../Inputs/CustomInput";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const UserList = ({ className }) => {
  return (
    <div className={cn("mb-48 px-5 py-4 bg-white rounded-md", className)}>
      <div className="flex justify-between gap-2 ">
        <h1 className="text-lg font-medium">User List</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <CustomInput placeholder={"Search"} inputClass={"pl-8"} />
            <Search
              size={16}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
          <button className="px-3 py-2.5 flex items-center gap-2 border rounded-md cursor-pointer">
            <ListFilter size={16} />{" "}
            <span className=" text-sm font-medium">Filter</span>
          </button>
        </div>
      </div>
      {/* table  */}
      <div className=" mt-6">
        <Table className={cn("")}>
          <TableHeader className="[&_tr]:border-b-0 overflow-hidden  bg-secondary-50 ">
            <TableRow className={cn("")}>
              <TableHead className={"!rounded-tl-md pl-4"}>User Name</TableHead>
              <TableHead>User ID</TableHead>
              <TableHead>Added Social Link</TableHead>
              <TableHead className={"!rounded-tr-md"}>badge</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="pl-4 py-3 ">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden">
                    <Image
                      src={userImage}
                      alt="user image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-medium">John Doe</h3>
                    <p className="text-xs text-gray-500">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>#1234567890</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FacebookIcon />
                  <InstagramIcon />
                  <TikTokIcon />
                  <YoutubeIcon />
                </div>
              </TableCell>
              <TableCell>Diamond Star</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="pl-4 py-3 ">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden">
                    <Image
                      src={userImage}
                      alt="user image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-medium">John Doe</h3>
                    <p className="text-xs text-gray-500">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>#1234567890</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FacebookIcon />
                  <InstagramIcon />
                  <TikTokIcon />
                  <YoutubeIcon />
                </div>
              </TableCell>
              <TableCell>Diamond Star</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
