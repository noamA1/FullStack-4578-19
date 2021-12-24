export class LimitedSpeker {
    constructor(_color, _volume) {
        this._color = _color;
        this._volume = _volume;
        if (_color !== "Black" && _color !== "Gray" && _color !== "White") {
            alert("color must be Black or Gray or White only!");
            this._color = "Black";
        }
        if (_volume < 0 || _volume > 10) {
            alert("Volume must be between 0 to 10 only!");
            this._volume = 0;
        }
    }
    turnOn() {
        this.showAlert("The speker turn on");
    }
    turnOff() {
        this.showAlert("The speker turn off");
    }
    sound() {
        this.showAlert(`The speker is playing... 🎶🎶`);
    }
    displayData() {
        const infoElement = document.querySelector(".limited-speker-data");
        infoElement.innerHTML = `<p> Speker Color: ${this._color}</p><p> Speker Volume: ${this._volume}</p>`;
        infoElement.removeAttribute("hidden");
    }
    showAlert(message) {
        const alertElement = document.querySelector(".limited-speker-alert");
        alertElement.innerHTML = message;
        alertElement.removeAttribute("hidden");
        setTimeout(() => {
            alertElement.setAttribute("hidden", "true");
        }, 2000);
    }
    //   Setters
    set color(value) {
        if (value !== "Black" && value !== "Gray" && value !== "White") {
            alert("color must be Black or Gray or White only!");
            return;
        }
        this._color = value;
    }
    set volume(value) {
        if (value < 0 || value > 10) {
            alert("Volume must be between 0 to 10 only!");
            return;
        }
        this._volume = value;
    }
    //   Getters
    get color() {
        return this._color;
    }
    get volume() {
        return this._volume;
    }
}
