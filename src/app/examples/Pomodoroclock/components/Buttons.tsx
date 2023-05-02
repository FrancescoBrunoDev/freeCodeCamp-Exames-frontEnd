import Timer, { Precision } from "easytimer.js";
import React, { useState } from "react";
import { TimeValues } from "../types";
import { Slabo_13px } from "next/font/google";

interface ButtonsInput {
  startValuesBreak: TimeValues;
  timerBreak: Timer;
  timer: Timer;
  startValues: TimeValues;
  countdown: boolean;
  onResetClick: () => void;
  onStartLoop: () => void;
  onPauseLoop: () => void;
  handleButtonClick: () => void;
  isSession: boolean;
}

export default function Buttons({
  isSession,
  onStartLoop,
  onPauseLoop,
  startValuesBreak,
  timerBreak,
  timer,
  startValues,
  countdown,
  onResetClick,
}: ButtonsInput): JSX.Element {
  const [isRunning, setIsRunning] = useState(false);

  const handleButtonClick = () => {
    if (isRunning) {
      console.log("pause");
      if (isSession) {
        timer.pause();
      } else {
        timerBreak.pause();
      }
      onPauseLoop(); // call onStopLoop here
    } else {
      console.log("start");
      if (isSession) {
        timer.start({
          startValues,
          countdown,
          target: { minutes: 0, seconds: 0 },
        });
      } else {
        timerBreak.start({
          startValues: startValuesBreak,
          countdown,
        });
      }
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
