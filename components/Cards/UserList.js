"use client";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/Assets/svgs/socialIcons";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import {
  useGetAdminUserListQuery,
  useUpdateUserBadgeMutation,
} from "@/Redux/Features/Auth/AuthApiSlice";
import { UserGroupIcon } from "hugeicons-react";
import { ListFilter, Loader, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import userImage from "../../Assets/images/testimonial image.webp";
import CustomInput from "../Inputs/CustomInput";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";
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

const badgeOptions = ["bronze", "silver", "gold", "diamond"];
const providerIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YoutubeIcon,
};
const formatBadge = (badge) => {
  if (!badge) return "No Badge";
  return badge.charAt(0).toUpperCase() + badge.slice(1);
};

const UserList = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [badge, setBadge] = useState("all");
  const debouncedSearch = useDebounce(searchTerm, 800);
  const [page, setPage] = useState(1);
  const limit = 15;

  const { data, isFetching } = useGetAdminUserListQuery({
    searchTerm: debouncedSearch,
    badge,
    page,
    limit,
  });

  const users = data?.data?.data || [];
  const meta = data?.data?.meta;
  const totalPages = Math.ceil((meta?.total || 0) / limit);
  // console.log(data);
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, badge]);

  const [updateUserBadge, { isLoading: isBadgeUpdating }] =
    useUpdateUserBadgeMutation();

  const handleBadgeChange = async (userId, selectedBadge) => {
    await updateUserBadge({ userId, badge: selectedBadge });
  };

  const getUniqueProviders = (socialAccounts = []) => {
    return [...new Set(socialAccounts.map((account) => account.provider))];
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
    <div className={cn("mb-48 px-5 py-4 bg-white rounded-md", className)}>
      {/* heading, searchbox and filter  */}
      <div className="flex justify-between gap-2 ">
        <h1 className="text-lg font-medium flex items-center gap-2">
          <UserGroupIcon size={20} /> User List
        </h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <CustomInput
              placeholder={"Name, email or phone "}
              inputClass={"pl-8"}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Search
              size={16}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
          <Select value={badge} onValueChange={setBadge}>
            <SelectTrigger className="w-[150px]">
              <ListFilter size={16} />
              <SelectValue placeholder="Filter badge" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Badges</SelectItem>
              {badgeOptions.map((item) => (
                <SelectItem key={item} value={item}>
                  {formatBadge(item)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* table  */}
      <div className=" mt-6">
        <Table>
          <TableHeader className="[&_tr]:border-b-0 overflow-hidden bg-secondary-50">
            <TableRow>
              <TableHead className="!rounded-tl-md pl-4">User Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Social Link</TableHead>
              <TableHead className="!rounded-tr-md text-center">
                Badge
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isFetching ? (
              <TableRow>
                <TableCell colSpan={4} className="py-8 text-center">
                  <Loader size={20} className="animate-spin mx-auto" />
                </TableCell>
              </TableRow>
            ) : users.length ? (
              users.map((user) => {
                const providers = getUniqueProviders(user.socialAccounts);
                return (
                  <TableRow key={user._id}>
                    <TableCell className="pl-4 py-3">
                      <Link
                        href={`/user/${user._id}`}
                        className="flex items-center gap-3"
                      >
                        <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100">
                          <Image
                            src={user.image || userImage}
                            alt={user.name || "user image"}
                            width={36}
                            height={36}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm font-medium">
                            {user.name || "Unknown User"}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {user.email || "No email"}
                          </p>
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell>{user.phone || "N/A"}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {providers.length ? (
                          providers.map((provider) => {
                            const Icon = providerIcons[provider];
                            return Icon ? <Icon key={provider} /> : null;
                          })
                        ) : (
                          <span className="text-xs text-gray-500">
                            No social link
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className={cn("mx-auto flex justify-center")}>
                      <Select
                        value={user.badge || ""}
                        disabled={isBadgeUpdating}
                        onValueChange={(selectedBadge) =>
                          handleBadgeChange(user._id, selectedBadge)
                        }
                      >
                        <SelectTrigger className="rounded-full">
                          <SelectValue placeholder="Set badge" />
                        </SelectTrigger>
                        <SelectContent>
                          {badgeOptions.map((item) => (
                            <SelectItem key={item} value={item}>
                              {formatBadge(item)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="py-8 text-center">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

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
  );
};

export default UserList;
