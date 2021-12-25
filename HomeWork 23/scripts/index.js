import { Drum } from "./Drum.js";
import { FlightAttendant } from "./FlightAttendant.js";
import { GrandPiano } from "./GrandPiano.js";
import { GroundAttendant } from "./GroundAttendant.js";
import { Guitar } from "./Guitar.js";
import { Passenger } from "./Passenger.js";
import { Piano } from "./Piano.js";
import { Pilot } from "./Pilot.js";
// global helper functions
const getRandomNumber = (min, max) => {
    let number = Math.random() * (max - min) + min;
    if (number % 1 < 0.5) {
        number = Math.floor(number);
    }
    else {
        number = Math.ceil(number);
    }
    return number;
};
let musicalInstrumentObj;
let musicalInstrumentArray = [];
let drumObj = new Drum("Mapex", "Black Panther", "Brown", 14);
let guitarObj = new Guitar("Kapok", "LC-14", "White", 6);
let pianoObj = new Piano("Steinway & Sons", "Model V-125", "Black", 88);
let grandPianoObj = new GrandPiano("Yamaha", "Disklavier DC-3 E3", "Black", 88, 149);
const drumInfoButton = document.querySelector(".drum-info");
const guitarInfoButton = document.querySelector(".guitar-info");
const pianoInfoButton = document.querySelector(".piano-info");
const grandPianoInfoButton = document.querySelector(".grandPiano-info");
const drumDataTextElement = document.querySelector(".drum-data");
const guitarDataTextElement = document.querySelector(".guitar-data");
const pianoDataTextElement = document.querySelector(".piano-data");
const grandPianoDataTextElement = document.querySelector(".grandPiano-data");
const randomMusicalIlnstrumentButton = document.querySelector(".random-musical-ilnstrument-button");
const randomMusicalIlnstrumentText = document.querySelector(".random-musical-ilnstrument-data");
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
        ? musicalInstrumentObj.displayData(randomMusicalIlnstrumentText, "piano", musicalInstrumentObj.pianoKeys)
        : musicalInstrumentObj.displayData(randomMusicalIlnstrumentText, "musicalInstrument");
});
// #2: Airport staff
const pilotInfoButton = document.querySelector(".pilot-info");
const pilotDataTextElement = document.querySelector(".pilot-data");
const flightAttendantInfoButton = document.querySelector(".flight-attendant-info");
const flightAttendantDataTextElement = document.querySelector(".flight-attendant-data");
const groundAttendantInfoButton = document.querySelector(".ground-attendant-info");
const groundAttendantDataTextElement = document.querySelector(".ground-attendant-data");
const passengerInfoButton = document.querySelector(".passenger-info");
const passengerDataTextElement = document.querySelector(".passenger-data");
const randomAirportStaffButton = document.querySelector(".random-airport-staff-button");
const randomAirportStaffTextElement = document.querySelector(".random-airport-staff-data");
const pilotObj = new Pilot("Avigdor", "Goldstian", 10, 17283723);
const flightAttendantObj = new FlightAttendant("Moshe", "Menchem", 2, "Israel", "First Calss");
const groundAttendantObj = new GroundAttendant("Hila", "David", 5, "Israel", "Check-in clerk");
const passengerObj = new Passenger("Avi", "Golan", 702837423);
let staffAndPassengerArray = [];
let staffObj;
staffAndPassengerArray.push(pilotObj);
staffAndPassengerArray.push(flightAttendantObj);
staffAndPassengerArray.push(groundAttendantObj);
staffAndPassengerArray.push(passengerObj);
pilotInfoButton.addEventListener("click", () => {
    pilotObj.displayPilotData(pilotDataTextElement);
});
flightAttendantInfoButton.addEventListener("click", () => {
    flightAttendantObj.displayFlightAttendantData(flightAttendantDataTextElement);
});
groundAttendantInfoButton.addEventListener("click", () => {
    groundAttendantObj.displayGroundAttendantData(groundAttendantDataTextElement);
});
passengerInfoButton.addEventListener("click", () => {
    passengerObj.displayPassengerData(passengerDataTextElement);
});
randomAirportStaffButton.addEventListener("click", () => {
    let staffRandomNumber = getRandomNumber(0, 3);
    staffObj = staffAndPassengerArray[staffRandomNumber];
    if (staffObj instanceof Passenger) {
        staffObj.displayData(randomAirportStaffTextElement, "passenger", passengerObj.passportNumber);
    }
    else if (staffObj instanceof Pilot) {
        staffObj.displayData(randomAirportStaffTextElement, "pilot", pilotObj.seniority);
    }
    else if (staffObj instanceof FlightAttendant) {
        staffObj.displayData(randomAirportStaffTextElement, "flight-attendant", flightAttendantObj.department, flightAttendantObj.originCountry);
    }
    else if (staffObj instanceof GroundAttendant) {
        staffObj.displayData(randomAirportStaffTextElement, "ground-attendant", groundAttendantObj.role, groundAttendantObj.originCountry);
    }
});
