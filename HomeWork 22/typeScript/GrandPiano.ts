import { Piano } from "./Piano.js";
export class GrandPiano extends Piano {
  constructor(
    manufacturer: string,
    model: string,
    color: string,
    pianoKeys: number,
    private _length: number
  ) {
    super(manufacturer, model, color, pianoKeys);
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
    this.pianoKeys = value;
  }
  public set length(value: number) {
    if (value < 20 || value > 150) {
      alert("Length must be positive");
      return;
    }
    this._length = value;
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
    return super.pianoKeys;
  }
  public get length() {
    return this._length;
  }

  public sound() {
    super.sound("grandPiano");
  }

  public displayPianoData(grandPianoDataElement: Element) {
    super.displayPianoData(grandPianoDataElement, "grandPiano");
    const dataList = document.querySelector(".grandpiano-data-list");
    const lengthItem = document.createElement("li");
    lengthItem.innerHTML = `Length: ${this._length} cm`;
    dataList.append(lengthItem);
  }
}
