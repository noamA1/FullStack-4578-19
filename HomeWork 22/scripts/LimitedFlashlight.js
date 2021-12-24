export class LimitedFlashlight {
    constructor(_color, _length, _lightPower, _numberOfBatteries) {
        this._color = _color;
        this._length = _length;
        this._lightPower = _lightPower;
        this._numberOfBatteries = _numberOfBatteries;
    }
    turnOn() {
        this.showAlert("The flashlight turn on");
    }
    turnOff() {
        this.showAlert("The flashlight turn off");
    }
    replaceBatteries() {
        this.showAlert("The flashlight batteries were replaced");
    }
    displayData() {
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
    set color(value) {
        this._color = value;
    }
    set length(value) {
        this.checkValue(value, "length")
            ? (this._length = value)
            : alert("Length must be between 0 to 50 only!");
    }
    set lightPower(value) {
        this.checkValue(value, "light")
            ? (this._lightPower = value)
            : alert("Light Power must be between 0 to 10 only!");
    }
    set numberOfBatteries(value) {
        this.checkValue(value, "batteries")
            ? (this._numberOfBatteries = value)
            : alert("Number Of Batteries must be between 1 to 5 only!");
    }
    //   Getters method
    get color() {
        return this._color;
    }
    get length() {
        return this._length;
    }
    get lightPower() {
        return this._lightPower;
    }
    get numberOfBatteries() {
        return this._numberOfBatteries;
    }
    showAlert(message) {
        const alertElement = document.querySelector(".limited-flashlight-alert");
        alertElement.innerHTML = message;
        alertElement.removeAttribute("hidden");
        setTimeout(() => {
            alertElement.setAttribute("hidden", "true");
        }, 2000);
    }
    checkValue(value, property) {
        let minValue, maxValue;
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
