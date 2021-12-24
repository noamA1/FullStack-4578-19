export class MusicalInstrument {
    constructor(_manufacturer, _model, _color) {
        this._manufacturer = _manufacturer;
        this._model = _model;
        this._color = _color;
    }
    //   Setters methods
    set manufacturer(value) {
        this._manufacturer = value;
    }
    set model(value) {
        this._model = value;
    }
    set color(value) {
        this._color = value;
    }
    //   Getters methods
    get manufacturer() {
        return this._manufacturer;
    }
    get model() {
        return this._model;
    }
    get color() {
        return this._color;
    }
    sound(message, type) {
        this.showAlert(message, type);
    }
    displayData(element, musicalInstrumentType) {
        element.innerHTML = `
    Your ${musicalInstrumentType} data:
    <ul class = "${musicalInstrumentType.toLowerCase()}-data-list">
        <li>Manufacturer: ${this.manufacturer}</li>
        <li>Model: ${this.model} </li>
        <li>Color: ${this.color}</li>
    </ul>`;
        element.removeAttribute("hidden");
    }
    showAlert(message, type) {
        const alertElement = document.querySelector(`.${type}-alert`);
        alertElement.innerHTML = message;
        alertElement.removeAttribute("hidden");
        setTimeout(() => {
            alertElement.setAttribute("hidden", "true");
        }, 2000);
    }
}
