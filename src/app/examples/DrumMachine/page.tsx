"use client";

import soundData, { Sound } from "./components/sounds";
import Button from "./components/button";
import { useEffect } from "react";

const App: React.FC = () => {
  const handleButtonClick = (sound: Sound) => {
    console.log(`Playing ${sound.description}`);
    const displayElement = document.querySelector("#display");
    if (displayElement) {
      displayElement.textContent = sound.description;
    }
    playSound(sound);
  };

  const playSound = (sound: Sound) => {
    const audio = new Audio(sound.src);
    audio.play();
  };

  return (
    <main
      id="quote-box"
      className="flex min-h-screen items-center justify-center"
    >
      <div
        id="drum-machine"
        className="shadow-2xl rounded-lg dark:bg-white bg-black"
      >
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-3 grid-cols-3 gap-x-8 gap-y-4 p-5 w-[19rem]">
            {soundData.sounds.map((sound) => (
              <Button
                key={sound.id}
                text={sound.key}
                sound={sound}
                handleClick={handleButtonClick}
              />
            ))}
          </div>
          <div className=" h-[9rem] dark:bg-black bg-white dark:text-white text-black m-5 rounded-lg shadow-xl p-5">
            <p id="display"></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
