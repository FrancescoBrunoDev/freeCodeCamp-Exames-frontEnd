import { TimeCounter } from "easytimer.js";
import React, { useState, useEffect } from "react";
import { TimeValues } from "../types";
import Timer from "easytimer.js";

interface TimerInput {
  isSession: boolean;
  timer: Timer;
  timeValues: TimeCounter;
  timeValuesBreak: TimeCounter;
}

export default function ScreenTimer({
  isSession,
  timeValuesBreak,
  timeValues,
}: TimerInput): JSX.Element {

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
            {isSession ? (
              <div>
                <span id="time-left">
                  {timeValues.toString(["minutes", "seconds"])}
                </span>
              </div>
            ) : (
              <div>
                <span id="time-left">
                  {timeValuesBreak.toString(["minutes", "seconds"])}
                </span>
              </div>
            )}
          </h1>
        </div>
      </div>
      <audio id="beep" src="/beep.mp3" />
    </div>
  );
}
