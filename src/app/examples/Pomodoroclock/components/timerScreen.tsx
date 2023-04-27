"use client"

import { useState, useEffect } from "react";

interface Props {
  valueInSeconds: number;
}

const TimeDisplay = ({ valueInSeconds }: Props) => {
  const [formattedValue, setFormattedValue] = useState("");

  useEffect(() => {
    const formatTime = (valueInSeconds: number): string => {
      const date = new Date(valueInSeconds * 1000);
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    setFormattedValue(formatTime(valueInSeconds));
  }, [valueInSeconds]);

  return <span>{formattedValue}</span>;
};

export default TimeDisplay;
