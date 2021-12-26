import { MusicalInstrument } from "./MusicalInstrument.js";
export class Drum extends MusicalInstrument {
    constructor(manufacturer, model, color, _diameter) {
        super(manufacturer, model, color);
        this._diameter = _diameter;
    }
    //   Setters methods
    set manufacturer(value) {
        this.manufacturer = value;
    }
    set model(value) {
        this.model = value;
    }
    set color(value) {
        this.color = value;
    }
    set diameter(value) {
        if (value < 0) {
            alert("Diameter must be an positive value");
            return;
        }
        this._diameter = value;
    }
    //   Getters methods
    get manufacturer() {
        return super.manufacturer;
    }
    get model() {
        return super.model;
    }
    get color() {
        return super.color;
    }
    get diameter() {
        return this._diameter;
    }
    displayDrumData(drumDataElement) {
        super.displayData(drumDataElement, "Drum");
        const dataList = document.querySelector(".drum-data-list");
        const diameterItem = document.createElement("li");
        diameterItem.innerHTML = `Diameter: ${this._diameter} cm`;
        dataList.append(diameterItem);
    }
}
