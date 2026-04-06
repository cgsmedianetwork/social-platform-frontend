const combineDateAndTime = (dateStr, timeStr) => {
  const datePart = new Date(dateStr).toISOString().split("T")[0]; // "2026-04-05"
  return new Date(`${datePart}T${timeStr}.000Z`).toISOString(); // "2026-04-05T01:30:00.000Z"
};

export default combineDateAndTime;
