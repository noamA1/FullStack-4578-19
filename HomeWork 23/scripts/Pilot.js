import { Staff } from "./Staff.js";
export class Pilot extends Staff {
    constructor(firstName, lastName, _seniority, _pilotLicenseNumber) {
        super(firstName, lastName);
        this._seniority = _seniority;
        this._pilotLicenseNumber = _pilotLicenseNumber;
    }
    displayPilotData(pilotTextElement) {
        super.displayData(pilotTextElement, "pilot");
        const dataList = document.querySelector(".pilot-data-list");
        const licenseNumberItem = document.createElement("li");
        const seniorityItem = document.createElement("li");
        licenseNumberItem.innerHTML = `License Number: ${this._pilotLicenseNumber}`;
        seniorityItem.innerHTML = `Seniority: ${this._seniority}`;
        dataList.append(seniorityItem);
        dataList.append(licenseNumberItem);
    }
    // Setters
    set seniority(value) {
        this._seniority = value;
    }
    set pilotLicenseNumber(value) {
        this._pilotLicenseNumber = value;
    }
    // Getters
    get seniority() {
        return this._seniority;
    }
    get pilotLicenseNumber() {
        return this._pilotLicenseNumber;
    }
}
