import { Staff } from "./Staff.js";
export class Passenger extends Staff {
    constructor(firstName, lastName, _passportNumber) {
        super(firstName, lastName);
        this._passportNumber = _passportNumber;
    }
    displayPassengerData(element) {
        const listElement = document.createElement("ul");
        listElement.classList.add(`passenger-data-list`);
        listElement.innerHTML = `
         <li>First name: ${this.firstName}</li>
         <li>Last name: ${this.lastName} </li>
         <li>Passport number: ${this._passportNumber}</li>
     `;
        element.innerHTML = `
    Your Passenger data:`;
        element.append(listElement);
        element.removeAttribute("hidden");
    }
    // Setters
    set passportNumber(passport) {
        this.passportNumber = passport;
    }
    // Getters
    get passportNumber() {
        return this._passportNumber;
    }
}
