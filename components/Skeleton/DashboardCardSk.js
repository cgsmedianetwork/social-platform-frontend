import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const DashboardCardSkeleton = ({ className }) => {
  return <Skeleton className={cn("w-full h-full", className)}></Skeleton>;
};

export default DashboardCardSkeleton;
