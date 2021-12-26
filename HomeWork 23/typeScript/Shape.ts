export abstract class Shape {
  constructor(public color: string) {}

  public abstract getArea(): number;
  public abstract getPerimeter(): number;

  public display(element: Element, shapeType: string) {
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
