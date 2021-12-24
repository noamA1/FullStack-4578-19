import { MusicalInstrument } from "./MusicalInstrument.js";
export class Guitar extends MusicalInstrument {
    constructor(manufacturer, model, color, _numberOfStrings) {
        super(manufacturer, model, color);
        this._numberOfStrings = _numberOfStrings;
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
    set numberOfStrings(value) {
        if (value < 4 || value > 8) {
            alert("Number Of Strings must be between 4 to 8");
            return;
        }
        this._numberOfStrings = value;
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
    get numberOfStrings() {
        return this._numberOfStrings;
    }
    sound() {
        super.sound("Making Guitar sound.. 🎶🎶 🎸🎸", "guitar");
    }
    displayGuitarData(drumDataElement) {
        super.displayData(drumDataElement, "Guitar");
        const dataList = document.querySelector(".guitar-data-list");
        const numberOfStringsItem = document.createElement("li");
        numberOfStringsItem.innerHTML = `Number of strings: ${this._numberOfStrings}`;
        dataList.append(numberOfStringsItem);
    }
}
