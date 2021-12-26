export class Shape {
    constructor(color) {
        this.color = color;
    }
    display(element, shapeType) {
        const listElement = document.createElement("ul");
        listElement.classList.add(`${shapeType.toLowerCase()}-data-list`);
        listElement.innerHTML = `
             <li>${shapeType} color: ${this.color}</li>`;
        element.innerHTML = `
        Your ${shapeType} data:`;
        element.append(listElement);
        element.removeAttribute("hidden");
    }
}
