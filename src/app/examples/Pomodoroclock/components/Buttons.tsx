import Timer, { Precision } from "easytimer.js";
import React, { useState } from "react";
import { TimeValues } from "../types";

interface ButtonsInput {
  isTargetAchieved: boolean;
  timer: Timer;
  startValues: TimeValues;
  target?: TimeValues;
  countdown: boolean;
  onResetClick: () => void;
}

export default function Buttons({
  isTargetAchieved,
  timer,
  startValues,
  target,
  countdown,
  onResetClick,
}: ButtonsInput): JSX.Element {
  const [isRunning, setIsRunning] = useState(false);

  const handleButtonClick = () => {
    if (isRunning) {
      if (isTargetAchieved) {
        timer.stop();
      } else {
        timer.pause();
      }
    } else {
      timer.start({
        startValues,
        countdown,
      });
    }
    setIsRunning(!isRunning);
  };

  console.log(isRunning);

  const handleResetClick = () => {
    timer.reset();
    setIsRunning(false);
    timer.stop();
    onResetClick();
  };

  return (
    <div className="flex items-center justify-center py-5 gap-4">
      <button
        onClick={handleButtonClick}
        className="p-2 rounded-lg bg-white text-black w-20"
        id="start_stop"
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="p-2 rounded-lg bg-white text-black w-20"
        id="reset"
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
}
