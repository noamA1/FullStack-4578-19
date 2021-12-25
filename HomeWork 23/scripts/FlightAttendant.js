import { Staff } from "./Staff.js";
export class FlightAttendant extends Staff {
    constructor(firstName, lastName, _seniority, _originCountry, _department) {
        super(firstName, lastName);
        this._seniority = _seniority;
        this._originCountry = _originCountry;
        this._department = _department;
    }
    displayFlightAttendantData(FlightAttendantTextElement) {
        super.displayData(FlightAttendantTextElement, "flight-attendant");
        const dataList = document.querySelector(".flight-attendant-data-list");
        const originCountryItem = document.createElement("li");
        const departmentItem = document.createElement("li");
        const seniorityItem = document.createElement("li");
        seniorityItem.innerHTML = `Seniority: ${this._seniority}`;
        originCountryItem.innerHTML = `Origin Country: ${this._originCountry}`;
        departmentItem.innerHTML = `Department: ${this._department}`;
        dataList.append(seniorityItem);
        dataList.append(originCountryItem);
        dataList.append(departmentItem);
    }
    // Setters
    set seniority(value) {
        this._seniority = value;
    }
    set originCountry(value) {
        this._originCountry = value;
    }
    set department(value) {
        this._department = value;
    }
    // Getters
    get seniority() {
        return this._seniority;
    }
    get originCountry() {
        return this._originCountry;
    }
    get department() {
        return this._department;
    }
}
