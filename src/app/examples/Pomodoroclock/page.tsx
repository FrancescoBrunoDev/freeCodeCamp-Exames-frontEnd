"use client";

import { TimeValues, TimeValuesBreak, TimeValuesSession } from "./types";
import Buttons from "./components/Buttons";
import SessionSettings from "./components/TimerSettings/SessionSettings";
import BreakSettings from "./components/TimerSettings/BreakSettings";
import useTimer from "easytimer-react-hook";
import { useState } from "react";
import Timer from "./components/Timer";

const Pomodoroclock = (): JSX.Element => {
  const [isCountdown, setIsCountdown] = useState(true);
  const [timer, isTargetAchieved] = useTimer({ countdown: true });
  const [timerBreak] = useTimer({ countdown: true });
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [timeValues, setTimeValues] = useState({ minutes: 25, seconds: 0 });

  const [startValuesBreak, setStartValuesBreak] = useState({
    minutes: 5,
    seconds: 0,
  } as TimeValuesBreak);

  const [startValuesSession, setStartValuesSession] = useState({
    minutes: 25,
    seconds: 0,
  } as TimeValuesSession);
  

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
    setStartValuesBreak({ minutes: 5, seconds: 0 });
    setIsSession(true);
    setIsRunning(false);
    timer.reset();
    timerBreak.reset();
    const beep = document.getElementById("beep") as HTMLAudioElement;
    beep.pause();
    beep.currentTime = 0;
  };

  const onStartLoop = () => {
    if (!timer.isRunning()) {
      setIsRunning(false);
      timer.pause();
      timerBreak.pause();
    } else {
      setIsRunning(true);
      timer.start({
        startValues: startValuesSession,
        target: { minutes: 0, seconds: 0 },
      });
      timerBreak.start({
        startValues: startValuesBreak,
        target: { minutes: 0, seconds: 0 },
      });
    }
  };

  const onPauseLoop = () => {
    console.log("Loop stopped");
    setIsRunning(false);
    timer.pause();
    timerBreak.pause();
  };

  timer.addEventListener("targetAchieved", () => {
    setStartValuesBreak(timer.getTimeValues() as TimeValuesBreak);
    setTimeout(() => {
      setIsSession(false);
      timerBreak.start({ startValues: startValuesBreak });
    }, 1000);
  });

  timerBreak.addEventListener("targetAchieved", () => {
    setStartValuesSession(timerBreak.getTimeValues() as TimeValuesSession);
    setTimeout(() => {
      setIsSession(true);
      timer.start({ startValues: startValuesSession });
    }, 1000);
  });

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
          <Timer
            isTargetAchieved={isTargetAchieved}
            timeValues={timer.getTimeValues()}
            timeValuesBreak={timerBreak.getTimeValues()}
            startValues={startValuesSession}
            isSession={isSession}
          />

          <Buttons
            timer={timer}
            timerBreak={timerBreak}
            startValues={startValuesSession}
            startValuesBreak={startValuesBreak}
            countdown={isCountdown}
            onResetClick={handleResetClick}
            handleButtonClick={onStartLoop}
            onStartLoop={onStartLoop}
            onPauseLoop={onPauseLoop}
          />
        </div>
      </div>
    </div>
  );
};

export default Pomodoroclock;
