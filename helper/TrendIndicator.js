import { ArrowDown, ArrowUp, EqualApproximatelyIcon } from "lucide-react";

const TrendIndicator = ({ direction, percentage }) => {
  if (direction === "increasing") {
    return (
      <span className="flex items-center gap-0.5 text-green-700 text-xs">
        <ArrowUp size={16} strokeWidth={2.5} className="text-green-600" />
        {percentage}%
      </span>
    );
  }
  if (direction === "declining") {
    return (
      <span className="flex items-center gap-0.5 text-red-500 text-xs">
        <ArrowDown size={16} strokeWidth={2.5} className="text-red-500" />
        {percentage}%
      </span>
    );
  }
  return (
    <span className="flex items-center gap-0.5 text-primary text-xs">
      <EqualApproximatelyIcon
        size={16}
        strokeWidth={2.5}
        className="text-primary"
      />
      0%
    </span>
  );
};

export default TrendIndicator;
