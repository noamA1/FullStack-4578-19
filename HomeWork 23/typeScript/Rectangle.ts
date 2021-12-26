import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
  constructor(color: string, private _width: number, private _length: number) {
    super(color);
  }

  public getArea(): number {
    return this._width * this._length;
  }

  public getPerimeter(): number {
    return 2 * (this._width + this._length);
  }
  public display(textElement: Element, shape: string) {
    super.display(textElement, shape);

    this.displayRectangleData(shape);
  }
  private displayRectangleData(shapeForListClass: string): void {
    const listDataElement = document.querySelector(
      `.${shapeForListClass.toLowerCase()}-data-list`
    );
    const widthItemElement = document.createElement("li");
    const lengthItemElement = document.createElement("li");
    const areaItemElement = document.createElement("li");
    const perimeterItemElement = document.createElement("li");
    widthItemElement.innerHTML = `Width: ${this._width} cm`;
    lengthItemElement.innerHTML = `Length: ${this._length} cm`;
    areaItemElement.innerHTML = `Area: ${this.getArea()} cm <small> 2 </small>`;
    perimeterItemElement.innerHTML = `Perimeter: ${this.getPerimeter()} cm`;
    listDataElement.append(
      widthItemElement,
      lengthItemElement,
      areaItemElement,
      perimeterItemElement
    );
  }
}
