import { TimeCounter } from "easytimer.js";
import React, { useState, useEffect } from "react";
import { TimeValues } from "../types";
import Timer from "easytimer.js";

interface TimerInput {
  timer: Timer;
  isTargetAchieved: boolean;
  timeValues: TimeCounter;
  timeValuesBreak: TimeCounter;
  startValues: TimeValues;
}

export default function ScreenTimer({
  timeValuesBreak,
  timeValues,
  isTargetAchieved,
}: TimerInput): JSX.Element {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isTargetAchieved && timeValues.toString() === "0:00:00") {
      const beep = document.getElementById("beep") as HTMLAudioElement;
      beep.currentTime = 0;
      beep.play();
    }
  }, [isTargetAchieved, timeValues]);

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
                  {timeValuesBreak.toString(["minutes", "seconds"])}
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
      <audio id="beep" src="beep.mp3" />
    </div>
  );
}
