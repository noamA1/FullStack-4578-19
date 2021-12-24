import { MusicalInstrument } from "./MusicalInstrument.js";
export class Piano extends MusicalInstrument {
  constructor(
    manufacturer: string,
    model: string,
    color: string,
    private _pianoKeys: number
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
  public set pianoKeys(value: number) {
    if (value < 20 || value > 150) {
      alert("Number Of Strings must be between 20 to 150");
      return;
    }
    this._pianoKeys = value;
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
  public get pianoKeys() {
    return this._pianoKeys;
  }

  public sound(pianoType: string) {
    super.sound("Making Piano sound.. 🎶🎶 🎹", pianoType);
  }

  public displayPianoData(pianoDataElement: Element, pianoTypeForList: string) {
    super.displayData(pianoDataElement, pianoTypeForList);
    let dataList: Element;
    pianoTypeForList === "Piano"
      ? (dataList = document.querySelector(".piano-data-list"))
      : (dataList = document.querySelector(".grandpiano-data-list"));
    const pianoKeysItem = document.createElement("li");
    pianoKeysItem.innerHTML = `Number of piano keys: ${this._pianoKeys}`;
    dataList.append(pianoKeysItem);
  }
}
