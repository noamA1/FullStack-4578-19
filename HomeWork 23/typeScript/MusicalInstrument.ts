import { Piano } from "./Piano";
export abstract class MusicalInstrument {
  constructor(
    private _manufacturer: string,
    private _model: string,
    private _color: string
  ) {}

  //   Setters methods
  public set manufacturer(value: string) {
    this._manufacturer = value;
  }
  public set model(value: string) {
    this._model = value;
  }
  public set color(value: string) {
    this._color = value;
  }

  //   Getters methods
  public get manufacturer() {
    return this._manufacturer;
  }
  public get model() {
    return this._model;
  }
  public get color() {
    return this._color;
  }

  public sound(message: string, type: string) {
    this.showAlert(message, type);
  }

  public displayData(
    element: Element,
    musicalInstrumentType: string,
    pianoKeys?: number
  ) {
    const listElement = document.createElement("ul");
    listElement.classList.add(
      `${musicalInstrumentType.toLowerCase()}-data-list`
    );
    listElement.innerHTML = `
         <li>Manufacturer: ${this.manufacturer}</li>
         <li>Model: ${this.model} </li>
         <li>Color: ${this.color}</li>
     `;
    element.innerHTML = `
    Your ${musicalInstrumentType} data:`;
    if (pianoKeys) {
      const pianoKeysItem = document.createElement("li");
      pianoKeysItem.innerHTML = `Number of piano keys: ${pianoKeys}`;
      listElement.append(pianoKeysItem);
    }
    element.append(listElement);
    element.removeAttribute("hidden");
  }

  private showAlert(message: string, type: string) {
    const alertElement = document.querySelector(`.${type}-alert`);
    alertElement.innerHTML = message;
    alertElement.removeAttribute("hidden");
    setTimeout(() => {
      alertElement.setAttribute("hidden", "true");
    }, 2000);
  }
}
