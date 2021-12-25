import { Staff } from "./Staff.js";

export class Pilot extends Staff {
  constructor(
    firstName: string,
    lastName: string,
    private _seniority: number,
    private _pilotLicenseNumber: number
  ) {
    super(firstName, lastName);
  }

  public displayPilotData(pilotTextElement: Element) {
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
  public set seniority(value: number) {
    this._seniority = value;
  }
  public set pilotLicenseNumber(value: number) {
    this._pilotLicenseNumber = value;
  }

  // Getters
  public get seniority(): number {
    return this._seniority;
  }
  public get pilotLicenseNumber(): number {
    return this._pilotLicenseNumber;
  }
}
