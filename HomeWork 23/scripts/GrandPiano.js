import { Piano } from "./Piano.js";
export class GrandPiano extends Piano {
    constructor(manufacturer, model, color, pianoKeys, _length) {
        super(manufacturer, model, color, pianoKeys);
        this._length = _length;
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
    set pianoKeys(value) {
        if (value < 20 || value > 150) {
            alert("Number Of Strings must be between 20 to 150");
            return;
        }
        this.pianoKeys = value;
    }
    set length(value) {
        if (value < 20 || value > 150) {
            alert("Length must be positive");
            return;
        }
        this._length = value;
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
    get pianoKeys() {
        return super.pianoKeys;
    }
    get length() {
        return this._length;
    }
    displayPianoData(grandPianoDataElement) {
        super.displayPianoData(grandPianoDataElement, "grandPiano");
        const dataList = document.querySelector(".grandpiano-data-list");
        const lengthItem = document.createElement("li");
        lengthItem.innerHTML = `Length: ${this._length} cm`;
        dataList.append(lengthItem);
    }
}
