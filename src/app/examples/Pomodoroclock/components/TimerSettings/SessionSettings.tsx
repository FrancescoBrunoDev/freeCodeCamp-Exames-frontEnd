import React from "react";
import { ImMinus, ImPlus } from "react-icons/im";

interface Props {
  minutes: number;
  onMinutesChange: (newMinutes: number) => void;
}

const SessionSettings: React.FC<Props> = ({ minutes, onMinutesChange }) => {
  const handleDecrement = () => {
    if (minutes > 1) {
      onMinutesChange(minutes - 1);
    }
  };

  const handleIncrement = () => {
    if (minutes < 60) {
      onMinutesChange(minutes + 1);
    }
  };

  return (
    <div className="grid">
      <div id="session-label" className="flex items-center justify-center pb-3">
        <div className="bg-black rounded-lg text-center p-3 w-full">
          <h1 className="text-white font-black">Session Length</h1>
        </div>
      </div>
      <div className="bg-black text-white p-5 rounded-lg shadow-xl flex items-center justify-center h-24">
        <div>
          <button id="session-decrement" onClick={handleDecrement}>
            <ImMinus size="40px" />
          </button>
        </div>
        <div className="w-15 flex items-center justify-center">
          <h1 id="session-length" className="text-3xl font-black px-5">
            {minutes}
          </h1>
        </div>
        <div>
          <button id="session-increment" onClick={handleIncrement}>
            <ImPlus size="40px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionSettings;
