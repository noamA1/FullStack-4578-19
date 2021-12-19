export class Employee {
    constructor(firstName, lastName, address, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.salary = salary;
    }
    displayEmployeeInfo() {
        const employeesCardsContainer = document.querySelector(".employees-cards");
        const employeeCard = document.createElement("div");
        employeeCard.classList.add("card");
        employeeCard.classList.add("border-primary");
        employeeCard.classList.add("card-employee");
        employeeCard.classList.add("mr-5");
        employeeCard.classList.add("mb-3");
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        cardHeader.innerHTML = `${this.firstName} info`;
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.classList.add("text-primary");
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = `${this.firstName} ${this.lastName}`;
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        const outerList = document.createElement("ul");
        outerList.setAttribute("id", `${this.firstName}-list`);
        outerList.classList.add("card-employee-outerList");
        outerList.innerHTML = `
        <li><strong>Address: </strong>
            <ul>
                <li>Street: ${this.address.street}</li>
                <li>City: ${this.address.city}</li>
                <li>Zipcode: ${this.address.zipcode}</li>
            </ul>
            <li><strong>Salary: </strong> ${this.salary}&#36;</li>
        </li>`;
        const cardButton = document.createElement("a");
        cardButton.classList.add("tax-button");
        cardButton.setAttribute("id", `tax-${this.firstName}`);
        cardButton.setAttribute("type", "button");
        cardButton.innerText = "Get tax";
        cardText.appendChild(outerList);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardButton);
        employeeCard.appendChild(cardHeader);
        employeeCard.appendChild(cardBody);
        employeesCardsContainer.append(employeeCard);
    }
    getTax() {
        return this.salary * 0.1;
    }
}
