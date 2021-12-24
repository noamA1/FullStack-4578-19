export class Car {
    constructor(_manufacturer, _model, _color, _engineCapacity) {
        this._manufacturer = _manufacturer;
        this._model = _model;
        this._color = _color;
        this._engineCapacity = _engineCapacity;
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
    set engineCapacity(value) {
        if (value < 1000 || value > 4000) {
            alert("Engine Capacity must be between 1000 to 4000");
            return;
        }
        this._engineCapacity = value;
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
    get engineCapacity() {
        return this._engineCapacity;
    }
    displayData(element, type) {
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
