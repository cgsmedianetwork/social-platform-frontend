const getChartColor = (direction) => {
  if (direction === "increasing") return "#15803d"; // green-700
  if (direction === "declining") return "#ef4444"; // red-500
  return "#737373"; // neutral-500
};
export default getChartColor;
