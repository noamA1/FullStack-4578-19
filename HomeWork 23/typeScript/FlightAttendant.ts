import { Staff } from "./Staff.js";

export class FlightAttendant extends Staff {
  constructor(
    firstName: string,
    lastName: string,
    private _seniority: number,
    private _originCountry: string,
    private _department: string
  ) {
    super(firstName, lastName);
  }

  public displayFlightAttendantData(FlightAttendantTextElement: Element) {
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
  public set seniority(value: number) {
    this._seniority = value;
  }
  public set originCountry(value: string) {
    this._originCountry = value;
  }
  public set department(value: string) {
    this._department = value;
  }

  // Getters
  public get seniority(): number {
    return this._seniority;
  }
  public get originCountry(): string {
    return this._originCountry;
  }
  public get department(): string {
    return this._department;
  }
}
