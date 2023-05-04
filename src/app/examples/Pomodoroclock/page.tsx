"use client";

import { TimeValues } from "./types";
import Buttons from "./components/Buttons";
import SessionSettings from "./components/TimerSettings/SessionSettings";
import BreakSettings from "./components/TimerSettings/BreakSettings";
import useTimer from "easytimer-react-hook";
import { useState } from "react";
import ScreenTimer from "./components/Timer";
import { initialState } from "../JavaScriptCalculator/myReactCalculator/reducer";

const Pomodoroclock = (): JSX.Element => {
  const [isCountdown] = useState(true);
  const [timer] = useTimer({ countdown: true });
  const [timerBreak] = useTimer({ countdown: true });
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  const [startValuesBreak, setStartValuesBreak] = useState({
    minutes: 5,
    seconds: 0,
  } as TimeValues);

  const [startValuesSession, setStartValuesSession] = useState({
    minutes: 25,
    seconds: 0,
  } as TimeValues);
  const initialTime = !isLooping
    ? `${startValuesSession.minutes.toString().padStart(2, "0")}:00`
    : null;

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

  function playbeep() {
    const beep = document.getElementById("beep") as HTMLAudioElement;
    beep.currentTime = 0;
    beep.play();
  }

  timer.addEventListener("targetAchieved", () => {
    setTimeout(() => {
      setIsSession(false);
      timerBreak.start({});
    }, 1000);
    playbeep();
  });

  timerBreak.addEventListener("targetAchieved", () => {
    setTimeout(() => {
      setIsSession(true);
      timer.start({ startValues: startValuesSession });
    }, 1000);
    playbeep();
  });

  const handleResetClick = () => {
    setStartValuesSession({ minutes: 25, seconds: 0 });
    setStartValuesBreak({ minutes: 5, seconds: 0 });
    initialState;
    setIsSession(true);
    setIsRunning(false);
    setIsLooping(false);
    timer.reset();
    timerBreak.reset();
    const beep = document.getElementById("beep") as HTMLAudioElement;
    beep.pause();
    beep.currentTime = 0;
  };

  console.log(isRunning, "isRunning");
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
            isRunning={isRunning}
            initialTime={initialTime}
          />

          <Buttons
            timer={timer}
            timerBreak={timerBreak}
            startValuesSession={startValuesSession}
            startValuesBreak={startValuesBreak}
            countdown={isCountdown}
            onResetClick={handleResetClick}
            isSession={isSession}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            setIsLooping={setIsLooping}
          />
        </div>
      </div>
    </div>
  );
};

export default Pomodoroclock;
