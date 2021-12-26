export abstract class Staff {
  constructor(public firstName: string, public lastName: string) {}

  public displayData(
    element: Element,
    crewMember: string,
    moreInfo?: number | string,
    attendantExtraInfo?: string
  ) {
    const listElement = document.createElement("ul");
    const extraInfo = document.createElement("li");
    const extraInfoForAttendant = document.createElement("li");

    listElement.classList.add(`${crewMember.toLowerCase()}-data-list`);
    listElement.innerHTML = `
         <li>First name: ${this.firstName}</li>
         <li>Last name: ${this.lastName} </li>`;
    element.innerHTML = `
    Your ${crewMember} data:`;
    if (moreInfo) {
      switch (crewMember) {
        case "pilot": {
          extraInfo.innerHTML = `Seniority: ${moreInfo}`;
          listElement.append(extraInfo);
          break;
        }
        case "passenger": {
          extraInfo.innerHTML = `Passport number: ${moreInfo}`;
          listElement.append(extraInfo);
          break;
        }
        case "flight-attendant": {
          extraInfo.innerHTML = `Department: ${moreInfo}`;
          extraInfoForAttendant.innerHTML = `Origin Country: ${attendantExtraInfo}`;
          listElement.append(extraInfo);
          listElement.append(extraInfoForAttendant);
          break;
        }
        case "ground-attendant": {
          extraInfo.innerHTML = `Role: ${moreInfo}`;
          extraInfoForAttendant.innerHTML = `Origin Country: ${attendantExtraInfo}`;
          listElement.append(extraInfo);
          listElement.append(extraInfoForAttendant);
          break;
        }
      }
    }

    element.append(listElement);
    element.removeAttribute("hidden");
  }
}
