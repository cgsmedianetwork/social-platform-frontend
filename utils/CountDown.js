"use client";
import { useEffect, useState } from "react";

export default function CountDown({ durationInSeconds, onComplete }) {
  const [remaining, setRemaining] = useState(() =>
    Math.floor(durationInSeconds / 1000)
  );

  useEffect(() => {
    if (remaining <= 0) return;

    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // ✅ schedule callback in next tick to avoid "setState during render"
          Promise.resolve().then(() => onComplete?.());
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]); // only depend on onComplete, not remaining

  // format time
  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  const formatted =
    hours > 0
      ? `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`
      : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`;

  return <span className="text-brand-700">{formatted}</span>;
}
