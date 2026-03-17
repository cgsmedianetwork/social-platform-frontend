"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";

const NumberFlowComponent = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Trigger animation after mount or whenever value changes
    setDisplayValue(Number(value));
  }, [value]);

  return (
    <NumberFlow
      value={displayValue}
      locales="en-US"
      // transformTiming={{ duration: 1000 }}
      format={{ notation: "compact" }}
    />
  );
};

export default NumberFlowComponent;
