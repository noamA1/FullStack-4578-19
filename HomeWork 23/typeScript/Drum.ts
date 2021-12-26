import { MusicalInstrument } from "./MusicalInstrument.js";
export class Drum extends MusicalInstrument {
  constructor(
    manufacturer: string,
    model: string,
    color: string,
    private _diameter: number
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
  public set diameter(value: number) {
    if (value < 0) {
      alert("Diameter must be an positive value");
      return;
    }
    this._diameter = value;
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
  public get diameter() {
    return this._diameter;
  }

  public displayDrumData(drumDataElement: Element) {
    super.displayData(drumDataElement, "Drum");
    const dataList = document.querySelector(".drum-data-list");
    const diameterItem = document.createElement("li");
    diameterItem.innerHTML = `Diameter: ${this._diameter} cm`;
    dataList.append(diameterItem);
  }
}
