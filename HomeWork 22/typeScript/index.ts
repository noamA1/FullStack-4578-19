import { RaceCar } from "./RaceCar.js";
import { Car } from "./Car.js";
import { Flashlight } from "./Flashlight.js";
import { LimitedFlashlight } from "./LimitedFlashlight.js";
import { LimitedSpeker } from "./LimitedSpeker.js";
import { Speker } from "./Speker.js";
import { Drum } from "./Drum.js";
import { Guitar } from "./Guitar.js";
import { Piano } from "./Piano.js";
import { GrandPiano } from "./GrandPiano.js";

// 1: Speker Class
const spekerPlayButton = document.querySelector(".speker-sound");
const spekerInfoButton = document.querySelector(".speker-info");
const spekerSwitchInputElement = <HTMLInputElement>(
  document.querySelector(".switch-speker-input")
);
const spekerSwitchLabelElement = document.querySelector(".switch-speker-label");
const spekerOneButtonElement = document.querySelector(".speker-one");
const spekerTwoButtonElement = document.querySelector(".speker-two");

let spekerOne = new Speker("Blue", 15);
let spekerTwo = new Speker("Black", 10);
let currentSpeker: Speker;

spekerOneButtonElement.addEventListener("click", () => {
  currentSpeker = spekerOne;
});
spekerTwoButtonElement.addEventListener("click", () => {
  currentSpeker = spekerTwo;
});
spekerPlayButton.addEventListener("click", () => {
  currentSpeker.sound();
});

spekerInfoButton.addEventListener("click", () => {
  currentSpeker.displayData();
});

spekerSwitchInputElement.addEventListener("click", () => {
  if (spekerSwitchInputElement.checked) {
    currentSpeker.turnOn();
    spekerSwitchLabelElement.innerHTML = "Turn off";
  } else {
    currentSpeker.turnOff();
    spekerSwitchLabelElement.innerHTML = "Turn on";
  }
});

// 2: Limited Speker
const limitedSpekerPlayButton = document.querySelector(".limited-speker-sound");
const limitedSpekerInfoButton = document.querySelector(".limited-speker-info");
const limitedSpekerSwitchInputElement = <HTMLInputElement>(
  document.querySelector(".switch-limited-speker-input")
);
const limitedSpekerSwitchLabelElement = document.querySelector(
  ".switch-limited-speker-label"
);
const limitedSpekerOneButtonElement = document.querySelector(
  ".limited-speker-one"
);
const limitedSpekerTwoButtonElement = document.querySelector(
  ".limited-speker-two"
);

let currentLimitedSpeker: LimitedSpeker;
let limitedSpekerOne = new LimitedSpeker("Gray", 9);
let limitedSpekerTwo = new LimitedSpeker("White", 6);

limitedSpekerOneButtonElement.addEventListener("click", () => {
  currentLimitedSpeker = limitedSpekerOne;
});
limitedSpekerTwoButtonElement.addEventListener("click", () => {
  currentLimitedSpeker = limitedSpekerTwo;
});

limitedSpekerPlayButton.addEventListener("click", () => {
  currentLimitedSpeker.sound();
});

limitedSpekerInfoButton.addEventListener("click", () => {
  currentLimitedSpeker.displayData();
});

limitedSpekerSwitchInputElement.addEventListener("click", () => {
  if (limitedSpekerSwitchInputElement.checked) {
    currentLimitedSpeker.turnOn();
    limitedSpekerSwitchLabelElement.innerHTML = "Turn off";
  } else {
    currentLimitedSpeker.turnOff();
    limitedSpekerSwitchLabelElement.innerHTML = "Turn on";
  }
});

limitedSpekerOne.color = "White";

// #3: Flashlight
const flashlightReplaceBatteriesButton = document.querySelector(
  ".flashlight-replaceBatteries"
);
const flashlightInfoButton = document.querySelector(".flashlight-info");
const flashlightSwitchInputElement = <HTMLInputElement>(
  document.querySelector(".switch-flashlight-input")
);
const flashlightSwitchLabelElement = document.querySelector(
  ".switch-flashlight-label"
);

const flashlightOneButtonElement = document.querySelector(".flashlight-one");
const flashlightTwoButtonElement = document.querySelector(".flashlight-two");
let currentFlashkight: Flashlight;
let flashlightOne = new Flashlight("Black", 20, 8, 4);
let flashlightTwo = new Flashlight("Yellow", 7, 5, 2);

flashlightOneButtonElement.addEventListener("click", () => {
  currentFlashkight = flashlightOne;
  console.log(currentFlashkight);
});
flashlightTwoButtonElement.addEventListener("click", () => {
  currentFlashkight = flashlightTwo;
});

flashlightReplaceBatteriesButton.addEventListener("click", () => {
  currentFlashkight.replaceBatteries();
});

flashlightInfoButton.addEventListener("click", () => {
  currentFlashkight.displayData();
});

flashlightSwitchInputElement.addEventListener("click", () => {
  if (flashlightSwitchInputElement.checked) {
    currentFlashkight.turnOn();
    flashlightSwitchLabelElement.innerHTML = "Turn off";
  } else {
    currentFlashkight.turnOff();
    flashlightSwitchLabelElement.innerHTML = "Turn on";
  }
});

// #4: Limited flashlight

const limitedFlashlightReplaceBatteriesButton = document.querySelector(
  ".limited-flashlight-replaceBatteries"
);
const limitedFlashlightInfoButton = document.querySelector(
  ".limited-flashlight-info"
);
const limitedFlashlightSwitchInputElement = <HTMLInputElement>(
  document.querySelector(".switch-limited-flashlight-input")
);
const limitedFlashlightSwitchLabelElement = document.querySelector(
  ".switch-limited-flashlight-label"
);

const limitedFlashlightOneButtonElement = document.querySelector(
  ".limited-flashlight-one"
);
const limitedFlashlightTwoButtonElement = document.querySelector(
  ".limited-flashlight-two"
);

let currentLimitedFlashkight: LimitedFlashlight;
let limitedFlashlightOne = new LimitedFlashlight("Black", 20, 8, 2);
let limitedFlashlightTwo = new LimitedFlashlight("Red", 15, 10, 3);

limitedFlashlightOneButtonElement.addEventListener("click", () => {
  currentLimitedFlashkight = limitedFlashlightOne;
});
limitedFlashlightTwoButtonElement.addEventListener("click", () => {
  currentLimitedFlashkight = limitedFlashlightTwo;
});

limitedFlashlightReplaceBatteriesButton.addEventListener("click", () => {
  currentLimitedFlashkight.replaceBatteries();
});

limitedFlashlightInfoButton.addEventListener("click", () => {
  currentLimitedFlashkight.displayData();
});

limitedFlashlightSwitchInputElement.addEventListener("click", () => {
  if (limitedFlashlightSwitchInputElement.checked) {
    currentLimitedFlashkight.turnOn();
    limitedFlashlightSwitchLabelElement.innerHTML = "Turn off";
  } else {
    currentLimitedFlashkight.turnOff();
    limitedFlashlightSwitchLabelElement.innerHTML = "Turn on";
  }
});

// #5: Car

const carInfoButtonElment = document.querySelector(".car-info");
const carInfoElment = document.querySelector(".car-data");

let carObj = new Car("Toyota", "Corolla", "Black", 1600);
carInfoButtonElment.addEventListener("click", () => {
  carObj.displayData(carInfoElment, "car");
});
// #5.1: Race Car
const raceCarInfoButtonElment = document.querySelector(".race-car-info");
const raceCarInfoElment = document.querySelector(".race-car-data");

let raceCarObj = new RaceCar("Ferrari", "488 GTE", "Black", 3996, 211, 50);
raceCarInfoButtonElment.addEventListener("click", () => {
  raceCarObj.displayData(raceCarInfoElment);
});

// #6: Musical Instruments

// #6.1: Drum
const drumPlayButton = document.querySelector(".drum-sound");
const drumInfoButton = document.querySelector(".drum-info");

let drumObj = new Drum("Mapex", "Black Panther", "Brown", 14);
drumPlayButton.addEventListener("click", () => {
  drumObj.sound();
});

drumInfoButton.addEventListener("click", () => {
  const drumInfoElement = document.querySelector(".drum-data");
  drumObj.displayDrumData(drumInfoElement);
});

// #6.2: Guitar
const guitarPlayButton = document.querySelector(".guitar-sound");
const guitarInfoButton = document.querySelector(".guitar-info");

let guitarObj = new Guitar("Kapok", "LC-14", "White", 6);
guitarPlayButton.addEventListener("click", () => {
  guitarObj.sound();
});

guitarInfoButton.addEventListener("click", () => {
  const guitarInfoElement = document.querySelector(".guitar-data");
  guitarObj.displayGuitarData(guitarInfoElement);
});

// #6.3: Piano
const pianoPlayButton = document.querySelector(".piano-sound");
const pianoInfoButton = document.querySelector(".piano-info");

let pianoObj = new Piano("Steinway & Sons", "Model V-125", "Black", 88);
pianoPlayButton.addEventListener("click", () => {
  pianoObj.sound("piano");
});

pianoInfoButton.addEventListener("click", () => {
  const pianoInfoElement = document.querySelector(".piano-data");
  pianoObj.displayPianoData(pianoInfoElement, "Piano");
});

// #6.2: Garnd Piano
const grandPianoPlayButton = document.querySelector(".grandPiano-sound");
const grandPianoInfoButton = document.querySelector(".grandPiano-info");

let grandPianoObj = new GrandPiano(
  "Yamaha",
  "Disklavier DC-3 E3",
  "Black",
  88,
  149
);
grandPianoPlayButton.addEventListener("click", () => {
  grandPianoObj.sound();
});

grandPianoInfoButton.addEventListener("click", () => {
  const grandPianoInfoElement = document.querySelector(".grandPiano-data");
  grandPianoObj.displayPianoData(grandPianoInfoElement);
});
