interface Sound {
  id: string;
  key: string;
  src: string;
  description: string;
}

const soundData = {
  sounds: [
    {
      id: "Q",
      key: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      description: "Heater-1",
    },
    {
      id: "W",
      key: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      description: "Heater-2",
    },
    {
      id: "E",
      key: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      description: "Heater-3",
    },
    {
      id: "A",
      key: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      description: "Heater-4",
    },
    {
      id: "S",
      key: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      description: "Clap",
    },
    {
      id: "D",
      key: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      description: "Open-HH",
    },
    {
      id: "Z",
      key: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      description: "Kick-n'-Hat",
    },
    {
      id: "X",
      key: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      description: "Kick",
    },
    {
      id: "C",
      key: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      description: "Closed-HH",
    },
  ],
};

export default soundData;
export type { Sound };
