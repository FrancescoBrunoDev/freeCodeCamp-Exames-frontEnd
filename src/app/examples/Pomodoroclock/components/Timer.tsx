import { TimeCounter } from "easytimer.js";
import React from "react";

interface TimerInput {
  isSession: boolean;
  timeValues: TimeCounter;
  timeValuesBreak: TimeCounter;
  isRunning: boolean;
  initialTime: string | null;
}

export default function ScreenTimer({
  isSession,
  timeValuesBreak,
  timeValues,
  isRunning,
  initialTime,
}: TimerInput): JSX.Element {
  const displayTimeValues = isSession ? timeValues : timeValuesBreak;

  return (
    <div className="flex items-center justify-center">
      <div>
        <h1
          id="timer-label"
          className="flex items-center justify-center text-lg font-black"
        >
          {!isSession ? "Break" : "Session"}
        </h1>
        <div className="flex items-center justify-center">
          <h1 className="text-6xl font-black">
            <span id="time-left">
              {initialTime || displayTimeValues.toString(["minutes", "seconds"])}
            </span>
          </h1>
        </div>
      </div>
      <audio id="beep" src="/beep.mp3" />
    </div>
  );
}
