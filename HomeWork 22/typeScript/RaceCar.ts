import { Car } from "./Car.js";

export class RaceCar extends Car {
  constructor(
    manufacturer: string,
    model: string,
    color: string,
    engineCapacity: number,
    private _maxSpeed: number,
    private _numberOfRaces: number
  ) {
    super(manufacturer, model, color, engineCapacity);
  }

  //   Setters methods
  public set manufacturer(value: string) {
    this.manufacturer = value;
  }
  public set model(value: string) {
    this.model = value;
  }
  public set color(value: string) {
    this.color = value;
  }
  public set engineCapacity(value: number) {
    if (value < 1000 || value > 4000) {
      alert("Engine Capacity must be between 1000 to 4000");
      return;
    }
    this.engineCapacity = value;
  }
  public set maxSpeed(value: number) {
    if (value < 200 || value > 500) {
      alert("Max Speed must be between 200 to 500");
      return;
    }
    this._maxSpeed = value;
  }
  public set numberOfRaces(value: number) {
    if (value < 0 || value > 100) {
      alert("Number of races must be between 1 to 100");
      return;
    }
    this._numberOfRaces = value;
  }
  //   Getters methods
  public get manufacturer() {
    return this.manufacturer;
  }
  public get model() {
    return this.model;
  }
  public get color() {
    return this.color;
  }
  public get engineCapacity() {
    return this.engineCapacity;
  }
  public get maxSpeed() {
    return this._maxSpeed;
  }
  public get numberOfRaces() {
    return this._numberOfRaces;
  }

  public displayData(element: Element) {
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
