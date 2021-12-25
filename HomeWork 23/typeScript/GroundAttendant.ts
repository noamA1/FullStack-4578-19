import { Staff } from "./Staff.js";

export class GroundAttendant extends Staff {
  constructor(
    firstName: string,
    lastName: string,
    private _seniority: number,
    private _originCountry: string,
    private _role: string
  ) {
    super(firstName, lastName);
  }

  public displayGroundAttendantData(groundAttendantTextElement: Element) {
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
  public set seniority(value: number) {
    this._seniority = value;
  }
  public set originCountry(value: string) {
    this._originCountry = value;
  }
  public set role(value: string) {
    this._role = value;
  }

  // Getters
  public get seniority(): number {
    return this._seniority;
  }
  public get originCountry(): string {
    return this._originCountry;
  }
  public get role(): string {
    return this._role;
  }
}
