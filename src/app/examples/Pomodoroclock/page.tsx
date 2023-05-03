"use client";

import { TimeValues } from "./types";
import Buttons from "./components/Buttons";
import SessionSettings from "./components/TimerSettings/SessionSettings";
import BreakSettings from "./components/TimerSettings/BreakSettings";
import useTimer from "easytimer-react-hook";
import { useState } from "react";
import ScreenTimer from "./components/Timer";

const Pomodoroclock = (): JSX.Element => {
  const [isCountdown] = useState(true);
  const [timer] = useTimer({ countdown: true });
  const [timerBreak] = useTimer({ countdown: true });
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  const [startValuesBreak, setStartValuesBreak] = useState({
    minutes: 0,
    seconds: 5,
  } as TimeValues);

  const [startValuesSession, setStartValuesSession] = useState({
    minutes: 0,
    seconds: 7,
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

  timer.addEventListener("targetAchieved", () => {
    setTimeout(() => {
      setIsSession(false);
      setStartValuesBreak(startValuesBreak)
      console.log(startValuesBreak, "Break")
      timerBreak.start({ startValues: startValuesBreak });
    }, 1000);
  });

  timerBreak.addEventListener("targetAchieved", () => {
    setTimeout(() => {
      setIsSession(true);
      setStartValuesSession(startValuesSession);
      console.log(startValuesSession, "Session")
      timer.start({ startValues: startValuesSession });
    }, 1000);
  });

  const handleResetClick = () => {
    setStartValuesSession({ minutes: 25, seconds: 0 });
    setStartValuesBreak({ minutes: 5, seconds: 0 });
    setIsSession(true);
    setIsRunning(false);
    timer.reset();
    timerBreak.reset();
    const beep = document.getElementById("beep") as HTMLAudioElement;
    beep.pause();
    beep.currentTime = 0;
  };

  function playbeep() {
    const beep = document.getElementById("beep") as HTMLAudioElement;
    beep.currentTime = 0;
    beep.play();
  }

  timer.addEventListener("targetAchieved", () => {
    playbeep();
  });

  timerBreak.addEventListener("targetAchieved", () => {
    playbeep();
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-rows-2 align-baseline ">
        <div className="grid grid-cols-2 gap-7">
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
            timeValues={timer.getTimeValues()}
            timeValuesBreak={timerBreak.getTimeValues()}
            isSession={isSession}
          />

          <Buttons
            timer={timer}
            timerBreak={timerBreak}
            startValuesSession={startValuesSession}
            startValuesBreak={startValuesBreak}
            countdown={isCountdown}
            onResetClick={handleResetClick}
            isSession={isSession}
          />
        </div>
      </div>
    </div>
  );
};

export default Pomodoroclock;