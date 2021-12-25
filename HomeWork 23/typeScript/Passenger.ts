import { Staff } from "./Staff.js";

export class Passenger extends Staff {
  constructor(
    firstName: string,
    lastName: string,
    private _passportNumber: number
  ) {
    super(firstName, lastName);
  }

  public displayPassengerData(element: Element) {
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

  public set passportNumber(passport: number) {
    this.passportNumber = passport;
  }
  // Getters
  public get passportNumber() {
    return this._passportNumber;
  }
}
