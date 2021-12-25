import { Drum } from "./Drum.js";
import { GrandPiano } from "./GrandPiano.js";
import { Guitar } from "./Guitar.js";
import { MusicalInstrument } from "./MusicalInstrument.js";
import { Piano } from "./Piano.js";

// global helper functions

const getRandomNumber = (min: number, max: number): number => {
  let number = Math.random() * (max - min) + min;
  if (number % 1 < 0.5) {
    number = Math.floor(number);
  } else {
    number = Math.ceil(number);
  }
  return number;
};

let musicalInstrumentObj: MusicalInstrument;
let musicalInstrumentArray: MusicalInstrument[] = [];
let drumObj = new Drum("Mapex", "Black Panther", "Brown", 14);
let guitarObj = new Guitar("Kapok", "LC-14", "White", 6);
let pianoObj = new Piano("Steinway & Sons", "Model V-125", "Black", 88);
let grandPianoObj = new GrandPiano(
  "Yamaha",
  "Disklavier DC-3 E3",
  "Black",
  88,
  149
);

const drumInfoButton = document.querySelector(".drum-info");
const guitarInfoButton = document.querySelector(".guitar-info");
const pianoInfoButton = document.querySelector(".piano-info");
const grandPianoInfoButton = document.querySelector(".grandPiano-info");
const drumDataTextElement = document.querySelector(".drum-data");
const guitarDataTextElement = document.querySelector(".guitar-data");
const pianoDataTextElement = document.querySelector(".piano-data");
const grandPianoDataTextElement = document.querySelector(".grandPiano-data");
const randomMusicalIlnstrumentButton = document.querySelector(
  ".random-musical-ilnstrument-button"
);
const randomMusicalIlnstrumentText = document.querySelector(
  ".random-musical-ilnstrument-data"
);

musicalInstrumentArray.push(drumObj);
musicalInstrumentArray.push(guitarObj);
musicalInstrumentArray.push(pianoObj);
musicalInstrumentArray.push(grandPianoObj);

drumInfoButton.addEventListener("click", () => {
  drumObj.displayDrumData(drumDataTextElement);
});
guitarInfoButton.addEventListener("click", () => {
  guitarObj.displayGuitarData(guitarDataTextElement);
});
pianoInfoButton.addEventListener("click", () => {
  pianoObj.displayPianoData(pianoDataTextElement, "Piano");
});

grandPianoInfoButton.addEventListener("click", () => {
  grandPianoObj.displayPianoData(grandPianoDataTextElement);
});

randomMusicalIlnstrumentButton.addEventListener("click", () => {
  let randomNumber = getRandomNumber(0, 3);
  musicalInstrumentObj = musicalInstrumentArray[randomNumber];
  musicalInstrumentObj instanceof Piano ||
  musicalInstrumentObj instanceof GrandPiano
    ? musicalInstrumentObj.displayData(
        randomMusicalIlnstrumentText,
        "piano",
        musicalInstrumentObj.pianoKeys
      )
    : musicalInstrumentObj.displayData(
        randomMusicalIlnstrumentText,
        "musicalInstrument"
      );
});
