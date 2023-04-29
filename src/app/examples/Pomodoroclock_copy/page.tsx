"use client";

import { TimeValues } from "./types";
import Buttons from "./components/Buttons";
import SessionSettings from "./components/TimerSettings/SessionSettings";
import BreakSettings from "./components/TimerSettings/BreakSettings";
import useTimer from "easytimer-react-hook";
import { useState } from "react";
import ScreenTimer from "./components/Timer";

const Pomodoroclock = (): JSX.Element => {

  const [timer, isTargetAchieved] = useTimer({
    /* Hook configuration */
});

  const [startValuesBreak, setStartValuesBreak] = useState({
    minutes: 0,
    seconds: 3,
  } as TimeValues);

  const [startValuesSession, setStartValuesSession] = useState({
    minutes: 0,
    seconds:3,
  } as TimeValues);

  const handleMinutesChangeSession = (newMinutes: number) => {
    setStartValuesSession((prevStartValues) => ({
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
    setStartValuesSession({ minutes: 25, seconds: 0 });
    timer.reset();
  };

console.log(timer.isRunning())

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-rows-2 gap-10 align-baseline ">
        <div className="grid grid-cols-2 gap-10">
          <BreakSettings
            minutes={startValuesBreak.minutes}
            onMinutesChangeBreak={handleMinutesChangeBreak}
          />
          <SessionSettings
            minutes={startValuesSession.minutes}
            onMinutesChange={handleMinutesChangeSession}
          />
        </div>
        <div className="w-full bg-black text-white p-5 rounded-lg shadow-xl grid-rows-2 ">
          <ScreenTimer
            isTargetAchieved={isTargetAchieved}
            timeValues={timer.getTimeValues()}
            startValues={startValuesSession}
          />

          <Buttons
            timer={timer}
            startValues={startValuesSession}
            startValuesBreak={startValuesBreak}
            onResetClick={handleResetClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Pomodoroclock;
