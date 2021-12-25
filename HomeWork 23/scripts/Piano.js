import { MusicalInstrument } from "./MusicalInstrument.js";
export class Piano extends MusicalInstrument {
    constructor(manufacturer, model, color, _pianoKeys) {
        super(manufacturer, model, color);
        this._pianoKeys = _pianoKeys;
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
        this._pianoKeys = value;
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
        return this._pianoKeys;
    }
    sound(pianoType) {
        super.sound("Making Piano sound.. 🎶🎶 🎹", pianoType);
    }
    displayPianoData(pianoDataElement, pianoTypeForList) {
        super.displayData(pianoDataElement, pianoTypeForList);
        let dataList;
        pianoTypeForList === "Piano"
            ? (dataList = document.querySelector(".piano-data-list"))
            : (dataList = document.querySelector(".grandpiano-data-list"));
        const pianoKeysItem = document.createElement("li");
        pianoKeysItem.innerHTML = `Number of piano keys: ${this._pianoKeys}`;
        dataList.append(pianoKeysItem);
    }
}
