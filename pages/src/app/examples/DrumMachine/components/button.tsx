import { useCallback, useEffect, useRef, useState } from "react";
import { Sound } from "./sounds";

interface ButtonProps {
  text: string;
  sound: Sound;
  handleClick: (sound: Sound) => void;
}

const Button: React.FC<ButtonProps> = ({ text, sound, handleClick }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleButtonClick = useCallback(() => {
    handleClick(sound);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setActive(true);
    setTimeout(() => setActive(false), 200);
  }, [handleClick, sound]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toUpperCase() === text.toUpperCase()) {
        handleButtonClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleButtonClick, text]);

  const buttonClassName =
    "rounded-lg h-16 w-20 shadow-xl drum-pad " +
    (active ? "button-drum-active" : "bg-white dark:bg-black");

  return (
    <button id={sound.id} className={buttonClassName} onClick={handleButtonClick}>
      {text}
      <audio className="clip" ref={audioRef} src={sound.src} id={sound.key}></audio>
    </button>
  );
};

export default Button;
