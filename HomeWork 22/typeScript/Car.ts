export class Car {
  constructor(
    private _manufacturer: string,
    private _model: string,
    private _color: string,
    private _engineCapacity: number
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
  public set engineCapacity(value: number) {
    if (value < 1000 || value > 4000) {
      alert("Engine Capacity must be between 1000 to 4000");
      return;
    }
    this._engineCapacity = value;
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
  public get engineCapacity() {
    return this._engineCapacity;
  }

  public displayData(element: Element, type: string) {
    element.innerHTML = `
    Your car data:
    <ul class = "${type}-data-list">
        <li>Manufacturer: ${this._manufacturer}</li>
        <li>Model: ${this._model} </li>
        <li>Color: ${this._color}</li>
        <li>Engine Capacity: ${this._engineCapacity} cm<small>3</small></li>
    </ul>`;
    element.removeAttribute("hidden");
  }
}
