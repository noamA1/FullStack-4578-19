import { MusicalInstrument } from "./MusicalInstrument.js";
export class Guitar extends MusicalInstrument {
  constructor(
    manufacturer: string,
    model: string,
    color: string,
    private _numberOfStrings: number
  ) {
    super(manufacturer, model, color);
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
  public set numberOfStrings(value: number) {
    if (value < 4 || value > 8) {
      alert("Number Of Strings must be between 4 to 8");
      return;
    }
    this._numberOfStrings = value;
  }

  //   Getters methods
  public get manufacturer() {
    return super.manufacturer;
  }
  public get model() {
    return super.model;
  }
  public get color() {
    return super.color;
  }
  public get numberOfStrings() {
    return this._numberOfStrings;
  }
  public sound() {
    super.sound("Making Guitar sound.. 🎶🎶 🎸🎸", "guitar");
  }

  public displayGuitarData(drumDataElement: Element) {
    super.displayData(drumDataElement, "Guitar");
    const dataList = document.querySelector(".guitar-data-list");
    const numberOfStringsItem = document.createElement("li");
    numberOfStringsItem.innerHTML = `Number of strings: ${this._numberOfStrings}`;
    dataList.append(numberOfStringsItem);
  }
}
