import { Car } from "./Car.js";
export class RaceCar extends Car {
    constructor(manufacturer, model, color, engineCapacity, _maxSpeed, _numberOfRaces) {
        super(manufacturer, model, color, engineCapacity);
        this._maxSpeed = _maxSpeed;
        this._numberOfRaces = _numberOfRaces;
    }
    //   Setters methods
    set manufacturer(value) {
        this.manufacturer = value;
    }
    set model(value) {
        this.model = value;
    }
    set color(value) {
        this.color = value;
    }
    set engineCapacity(value) {
        if (value < 1000 || value > 4000) {
            alert("Engine Capacity must be between 1000 to 4000");
            return;
        }
        this.engineCapacity = value;
    }
    set maxSpeed(value) {
        if (value < 200 || value > 500) {
            alert("Max Speed must be between 200 to 500");
            return;
        }
        this._maxSpeed = value;
    }
    set numberOfRaces(value) {
        if (value < 0 || value > 100) {
            alert("Number of races must be between 1 to 100");
            return;
        }
        this._numberOfRaces = value;
    }
    //   Getters methods
    get manufacturer() {
        return this.manufacturer;
    }
    get model() {
        return this.model;
    }
    get color() {
        return this.color;
    }
    get engineCapacity() {
        return this.engineCapacity;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    get numberOfRaces() {
        return this._numberOfRaces;
    }
    displayData(element) {
        super.displayData(element, "raceCar");
        const carDataList = document.querySelector(".raceCar-data-list");
        const maxSpeedItem = document.createElement("li");
        maxSpeedItem.innerHTML = `Max speed: ${this._maxSpeed} Kmh`;
        const numberOfRacesItem = document.createElement("li");
        numberOfRacesItem.innerHTML = `Number of races: ${this._numberOfRaces} races`;
        carDataList.append(maxSpeedItem);
        carDataList.append(numberOfRacesItem);
    }
}
