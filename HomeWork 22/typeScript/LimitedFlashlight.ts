export class LimitedFlashlight {
  constructor(
    private _color: string,
    private _length: number,
    private _lightPower: number,
    private _numberOfBatteries: number
  ) {}

  public turnOn() {
    this.showAlert("The flashlight turn on");
  }

  public turnOff() {
    this.showAlert("The flashlight turn off");
  }

  public replaceBatteries() {
    this.showAlert("The flashlight batteries were replaced");
  }
  public displayData() {
    const infoElement = document.querySelector(".limited-flashlight-data");
    infoElement.innerHTML = `
      Flashlight Data:
      <ul>
          <li>Color: ${this._color}</li>
          <li>Length: ${this._length} cm</li>
          <li>Light power: ${this._lightPower} </li>
          <li>Number of batteries: ${this._numberOfBatteries}</li>
      </ul>`;
    infoElement.removeAttribute("hidden");
  }

  //Setters methods
  public set color(value: string) {
    this._color = value;
  }
  public set length(value: number) {
    this.checkValue(value, "length")
      ? (this._length = value)
      : alert("Length must be between 0 to 50 only!");
  }
  public set lightPower(value: number) {
    this.checkValue(value, "light")
      ? (this._lightPower = value)
      : alert("Light Power must be between 0 to 10 only!");
  }
  public set numberOfBatteries(value: number) {
    this.checkValue(value, "batteries")
      ? (this._numberOfBatteries = value)
      : alert("Number Of Batteries must be between 1 to 5 only!");
  }
  //   Getters method

  public get color() {
    return this._color;
  }
  public get length() {
    return this._length;
  }
  public get lightPower() {
    return this._lightPower;
  }
  public get numberOfBatteries() {
    return this._numberOfBatteries;
  }
  private showAlert(message: string) {
    const alertElement = document.querySelector(".limited-flashlight-alert");
    alertElement.innerHTML = message;
    alertElement.removeAttribute("hidden");
    setTimeout(() => {
      alertElement.setAttribute("hidden", "true");
    }, 2000);
  }

  private checkValue(value: any, property: string): boolean {
    let minValue: number, maxValue: number;
    switch (property) {
      case "length":
        minValue = 0;
        maxValue = 50;
        break;
      case "light":
        minValue = 0;
        maxValue = 10;
        break;
      case "batteries":
        minValue = 1;
        maxValue = 5;
        break;
    }
    console.log("minValue: ", minValue, "maxValue: ", maxValue);
    if (value < minValue || value > maxValue) {
      return false;
    }
    return true;
  }
}
