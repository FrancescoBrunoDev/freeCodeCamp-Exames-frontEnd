import Timer, { Precision } from "easytimer.js";
import React, { useState } from "react";
import { TimeValues } from "../types";

interface ButtonsInput {
  startValuesBreak: TimeValues;
  timerBreak: Timer;
  isTargetAchieved: boolean;
  timer: Timer;
  startValues: TimeValues;
  target?: TimeValues;
  countdown: boolean;
  onResetClick: () => void;
  isSession: boolean;
}

export default function Buttons({
  isSession,
  startValuesBreak,
  timerBreak,
  isTargetAchieved,
  timer,
  startValues,
  target,
  countdown,
  onResetClick,
}: ButtonsInput): JSX.Element {
  const [isRunning, setIsRunning] = useState(false);

  const handleResetClick = () => {
    timer.reset();
    timerBreak.reset()
    setIsRunning(false);
    timer.stop();
    timerBreak.stop()
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
