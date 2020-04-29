import boom from "./sounds/boom.wav";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tink from "./sounds/tink.wav";
import tom from "./sounds/tom.wav";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Clap",
    url: clap,
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Hihat",
    url: hihat,
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Kick",
    url: kick,
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Open Hat",
    url: openhat,
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Boom",
    url: boom,
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Ride",
    url: ride,
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Snare",
    url: snare,
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Tom",
    url: tom,
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Tink",
    url: tink,
  },
];

export { bankOne };
