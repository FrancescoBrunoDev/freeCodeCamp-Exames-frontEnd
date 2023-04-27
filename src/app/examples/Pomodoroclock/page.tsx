import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import React from "react";
import TimeDisplay from "./components/timerScreen";

export default function Pomodoroclock() {
  return (
    <div className="flex min-h-screen items-center justify-center px-20">
      <div className="grid grid-cols-2  align-baseline">
        <div className="flex flex-col">
          <div id="break-label">
            <h1>buy some time</h1>
          </div>
          <div>
            <button id="break-increment">
              <FiPlusSquare size="50px" />
            </button>
          </div>
          <div id="break-length" className="">
            <h1>5</h1>
          </div>
          <div id="timer-label" className="">
            <h1>Session</h1>
          </div>
          <div>
            <button id="break-decrement">
              <FiMinusSquare size="50px" />
            </button>
          </div>
        </div>
        <div>
          <div id="session-label">
            <h1>work longer harder</h1>
          </div>
          <div>
            <button id="session-increment">
              <FiPlusSquare size="50px" />
            </button>
          </div>
          <div id="session-length" className="">
            <h1>25</h1>
          </div>
          <div id="time-left">
            <TimeDisplay valueInSeconds={1500} /> {/* displays "25:00" */}
          </div>
          <div>
            <button id="session-decrement">
              <FiMinusSquare size="50px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
