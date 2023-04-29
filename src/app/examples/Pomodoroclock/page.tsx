"use client";

import { TimeValues, TimeValuesBreak } from "./types";
import Buttons from "./components/Buttons";
import SessionSettings from "./components/TimerSettings/SessionSettings";
import BreakSettings from "./components/TimerSettings/BreakSettings";
import useTimer from "easytimer-react-hook";
import { useState } from "react";
import Timer from "./components/Timer";

const Pomodoroclock = (): JSX.Element => {
  const [startValues, setStartValues] = useState({
    minutes: 25,
    seconds: 0,
  } as TimeValues);

  const [isCountdown, setIsCountdown] = useState(true);
  const [updateWhenTargetAchieved, setUpdateWhenTargetAchieved] =
    useState(true);
  const [timer, isTargetAchieved] = useTimer({ updateWhenTargetAchieved });
  const [timerBreak, isTargetAchievedBreak] = useTimer({ updateWhenTargetAchieved });

  const [startValuesBreak, setStartValuesBreak] = useState({
    minutes: 5,
    seconds: 0,
  } as TimeValuesBreak);

  const handleMinutesChange = (newMinutes: number) => {
    setStartValues((prevStartValues) => ({
      ...prevStartValues,
      minutes: newMinutes,
    }));
  };

  const handleMinutesChangeBreak = (newMinutes: number) => {
    setStartValuesBreak((prevStartValues) => ({
      ...prevStartValues,
      minutes: newMinutes,
    }));
  };

  const handleResetClick = () => {
    setStartValues({ minutes: 25, seconds: 0 });
    setStartValuesBreak({ minutes: 5, seconds: 0 });
  };

  // Check if the target is achieved for the session timer
  if (isTargetAchieved && updateWhenTargetAchieved) {
    // Stop updating the timer automatically when the target is achieved
    setUpdateWhenTargetAchieved(false);

    // Update the break time to the remaining time
    setStartValuesBreak(timerBreak.getTimeValues() as TimeValuesBreak);

    // Start a new timer for the break time
    timerBreak.start({ startValues: startValuesBreak, countdown: true });
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-rows-2 gap-10 align-baseline ">
        <div className="grid grid-cols-2 gap-10">
          <BreakSettings
            minutesBreak={startValuesBreak.minutes}
            onMinutesChangeBreak={handleMinutesChangeBreak}
          />
          <SessionSettings
            minutes={startValues.minutes}
            onMinutesChange={handleMinutesChange}
          />
        </div>
        <div className="w-full bg-black text-white p-5 rounded-lg shadow-xl grid-rows-2 ">
          <Timer
            isTargetAchieved={isTargetAchieved}
            timeValues={timer.getTimeValues()}
            timeValuesBreak={timerBreak.getTimeValues()}
            startValues={startValues}
            countdown={isCountdown}
          />

          <Buttons
            timer={timer}
            startValues={startValues}
            countdown={isCountdown}
            onResetClick={handleResetClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Pomodoroclock;
