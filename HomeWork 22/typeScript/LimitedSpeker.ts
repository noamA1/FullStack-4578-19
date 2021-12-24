export class LimitedSpeker {
  constructor(private _color: string, private _volume: number) {
    if (_color !== "Black" && _color !== "Gray" && _color !== "White") {
      alert("color must be Black or Gray or White only!");
      this._color = "Black";
    }
    if (_volume < 0 || _volume > 10) {
      alert("Volume must be between 0 to 10 only!");
      this._volume = 0;
    }
  }

  public turnOn() {
    this.showAlert("The speker turn on");
  }

  public turnOff() {
    this.showAlert("The speker turn off");
  }

  public sound() {
    this.showAlert(`The speker is playing... 🎶🎶`);
  }

  public displayData() {
    const infoElement = document.querySelector(".limited-speker-data");
    infoElement.innerHTML = `<p> Speker Color: ${this._color}</p><p> Speker Volume: ${this._volume}</p>`;
    infoElement.removeAttribute("hidden");
  }

  private showAlert(message: string) {
    const alertElement = document.querySelector(".limited-speker-alert");
    alertElement.innerHTML = message;
    alertElement.removeAttribute("hidden");
    setTimeout(() => {
      alertElement.setAttribute("hidden", "true");
    }, 2000);
  }

  //   Setters
  public set color(value: string) {
    if (value !== "Black" && value !== "Gray" && value !== "White") {
      alert("color must be Black or Gray or White only!");
      return;
    }
    this._color = value;
  }
  public set volume(value: number) {
    if (value < 0 || value > 10) {
      alert("Volume must be between 0 to 10 only!");
      return;
    }
    this._volume = value;
  }

  //   Getters
  public get color() {
    return this._color;
  }
  public get volume() {
    return this._volume;
  }
}
