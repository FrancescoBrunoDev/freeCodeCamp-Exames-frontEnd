import Timer, { Precision } from "easytimer.js";
import React, { useState } from "react";
import { TimeValues } from "../types";

interface ButtonsInput {
  timerBreak: Timer;
  timer: Timer;
  startValuesSession: TimeValues;
  startValuesBreak: TimeValues;
  countdown: boolean;
  onResetClick: () => void;
  isSession: boolean;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  setIsLooping: (isLooping: boolean) => void;
}

export default function Buttons({
  isSession,
  startValuesBreak,
  timerBreak,
  timer,
  startValuesSession,
  onResetClick,
  isRunning,
  setIsRunning,
  setIsLooping,
}: ButtonsInput): JSX.Element {

  const handleButtonClick = () => {
    if (isRunning) {
      console.log("pause");
      if (isSession) {
        timer.pause();
      } else {
        timerBreak.pause();
      }
      setIsRunning(false);
    } else {
      console.log("start");
      if (isSession) {
        timer.start({
          startValues: startValuesSession,
        });
        timerBreak.start({
          startValues: {
            minutes: startValuesBreak.minutes + startValuesSession.minutes,
            seconds: startValuesBreak.seconds + startValuesSession.seconds,
          },
        });
      } else {
        timerBreak.start({
          //startValues: startValuesBreak, 
        });
      }
      setIsLooping(true);
      setIsRunning(true);
    }
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