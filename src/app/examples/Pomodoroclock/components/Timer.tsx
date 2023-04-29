import { TimeCounter } from "easytimer.js";
import { TimeCounterBreak } from "easytimer.js";
import React, { useState, useEffect } from "react";
import { TimeValues, TimeValuesBreak } from "../types";
import Timer from "easytimer.js";

interface TimerInput {
  timer: Timer;
  isTargetAchieved: boolean;
  timeValues: TimeCounter;
  startValues: TimeValues;
}

export default function ScreenTimer({
  timeValues,
  isTargetAchieved,
}: TimerInput): JSX.Element {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isTargetAchieved) {
      const beep = new Audio("/beep.wav");
      beep.play();
      setTimeout(() => {
        beep.pause();
        beep.currentTime = 0;
      }, 1000);
    }
  }, [isTargetAchieved]);

  
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1
          id="timer-label"
          className="flex items-center justify-center text-lg"
        >
          {isTargetAchieved ? "Break" : "Session"}
        </h1>
        <div className="flex items-center justify-center">
          <h1 className="text-6xl font-black">
            {isTargetAchieved ? (
              <div>
                <span id="time-left">
                  {timeValues.toString(["minutes", "seconds"])}
                </span>
              </div>
            ) : (
              <div>
                <span id="time-left">
                  {timeValues.toString(["minutes", "seconds"])}
                </span>
              </div>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
}
