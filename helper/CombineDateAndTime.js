// const combineDateAndTime = (dateStr, timeStr) => {
//   const datePart = new Date(dateStr).toISOString().split("T")[0]; // "2026-04-05"
//   return new Date(`${datePart}T${timeStr}.000Z`).toISOString(); // "2026-04-05T01:30:00.000Z"
// };

// export default combineDateAndTime;

const combineDateAndTime = (dateStr, timeStr) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const datePart = `${year}-${month}-${day}`;
  return new Date(`${datePart}T${timeStr}`).toISOString();
};

export default combineDateAndTime;
