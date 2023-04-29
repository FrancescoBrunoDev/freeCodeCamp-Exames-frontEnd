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
  onStartLoop: () => void;
  onPauseLoop: () => void;
  handleButtonClick: () => void;
}

export default function Buttons({
  onStartLoop,
  onPauseLoop,
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

  const handleButtonClick = () => {
    if (isRunning) {
      console.log("pause");
      timer.pause();
      timerBreak.pause();
      onPauseLoop(); // call onStopLoop here
    } else {
      console.log("start");
      timer.start({
        startValues,
        countdown,
        target: { minutes: 0, seconds: 0 },
      });
      timerBreak.start({
        startValues: startValuesBreak,
        countdown,
        target: { minutes: 0, seconds: 0 },
      });
      onStartLoop(); // call onStartLoop here
    }
    setIsRunning(!isRunning);
  };

  const handleResetClick = () => {
    timer.reset();
    timerBreak.reset();
    setIsRunning(false);
    onResetClick();
    timer.stop();
    timerBreak.stop();
  };

  return (
    <div className="flex items-center justify-center py-5 gap-4">
      <button
        onClick={handleButtonClick}
        className={`p-2 rounded-lg ${
          isRunning ? "bg-red-500" : "bg-green-500"
        } text-white w-20 font-black hover:scale-105`}
        id="start_stop"
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="p-2 rounded-lg bg-white text-black w-20 font-black hover:scale-105"
        id="reset"
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
}
