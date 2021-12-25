import { Staff } from "./Staff.js";
export class GroundAttendant extends Staff {
    constructor(firstName, lastName, _seniority, _originCountry, _role) {
        super(firstName, lastName);
        this._seniority = _seniority;
        this._originCountry = _originCountry;
        this._role = _role;
    }
    displayGroundAttendantData(groundAttendantTextElement) {
        super.displayData(groundAttendantTextElement, "ground-attendant");
        const dataList = document.querySelector(".ground-attendant-data-list");
        const originCountryItem = document.createElement("li");
        const roleItem = document.createElement("li");
        const seniorityItem = document.createElement("li");
        seniorityItem.innerHTML = `Seniority: ${this._seniority}`;
        originCountryItem.innerHTML = `Origin Country: ${this._originCountry}`;
        roleItem.innerHTML = `Role: ${this._role}`;
        dataList.append(seniorityItem);
        dataList.append(originCountryItem);
        dataList.append(roleItem);
    }
    // Setters
    set seniority(value) {
        this._seniority = value;
    }
    set originCountry(value) {
        this._originCountry = value;
    }
    set role(value) {
        this._role = value;
    }
    // Getters
    get seniority() {
        return this._seniority;
    }
    get originCountry() {
        return this._originCountry;
    }
    get role() {
        return this._role;
    }
}
