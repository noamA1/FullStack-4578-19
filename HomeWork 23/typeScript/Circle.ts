import { Shape } from "./Shape.js";

export class Circle extends Shape implements CircularShape {
  constructor(color: string, private _radius: number) {
    super(color);
  }

  public getArea(): number {
    return 2 * Math.PI * Math.pow(this._radius, 2);
  }

  public getPerimeter(): number {
    return Math.PI * this.getDiameter();
  }

  public getDiameter(): number {
    return 2 * this._radius;
  }
  public display(textElement: Element, shape: string) {
    super.display(textElement, shape);
    this.displayCircleData(shape);
  }

  private displayCircleData(shapeForListClass: string): void {
    const listDataElement = document.querySelector(
      `.${shapeForListClass.toLowerCase()}-data-list`
    );
    const radiusItemElement = document.createElement("li");
    const areaItemElement = document.createElement("li");
    const perimeterItemElement = document.createElement("li");
    const diameterItemElement = document.createElement("li");
    radiusItemElement.innerHTML = `Radius: ${this._radius} cm`;
    areaItemElement.innerHTML = `Area: ${this.getArea().toFixed(
      3
    )} cm <small> 2 </small>`;
    perimeterItemElement.innerHTML = `Perimeter: ${this.getPerimeter().toFixed(
      3
    )} cm`;
    diameterItemElement.innerHTML = `Diameter: ${this.getDiameter()} cm`;
    listDataElement.append(
      radiusItemElement,
      areaItemElement,
      perimeterItemElement,
      diameterItemElement
    );
  }
}
