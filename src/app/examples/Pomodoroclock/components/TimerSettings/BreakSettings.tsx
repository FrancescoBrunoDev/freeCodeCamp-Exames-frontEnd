import React from 'react';
import { ImMinus, ImPlus } from 'react-icons/im';

interface Props {
  minutesBreak: number;
  onMinutesChangeBreak: (newMinutes: number) => void;
}

const BreakSettings: React.FC<Props> = ({
  minutesBreak,
  onMinutesChangeBreak,
}) => {

  const handleDecrement = () => {
    if (minutesBreak > 1) {
      onMinutesChangeBreak(minutesBreak - 1);
    }
  };

  const handleIncrement = () => {
    if (minutesBreak < 60 ) {
      onMinutesChangeBreak(minutesBreak + 1);
    }
  };
  return (
    <div className="grid">
      <div id="break-label" className="flex items-center justify-center pb-3">
        <div className="bg-black rounded-lg p-3">
          <h1 className="text-white">Break Length</h1>
        </div>
      </div>
      <div className="bg-black text-white p-5 rounded-lg shadow-xl flex items-center justify-center h-24">
        <div>
          <button id="break-decrement" onClick={handleDecrement}>
            <ImMinus size="40px" />
          </button>
        </div>
        <div className="w-15 flex items-center justify-center">
          <h1 id="break-length" className="text-3xl font-black px-5">{minutesBreak}</h1>
        </div>
        <div>
          <button id="break-increment" onClick={handleIncrement}>
            <ImPlus size="40px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreakSettings;
