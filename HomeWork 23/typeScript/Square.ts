import { Shape } from "./Shape.js";

export class Square extends Shape {
  constructor(color: string, private _edge: number) {
    super(color);
  }

  public getArea(): number {
    return Math.pow(this._edge, 2);
  }

  public getPerimeter(): number {
    return 4 * this._edge;
  }
  public display(textElement: Element, shape: string) {
    super.display(textElement, shape);

    this.displaySquareData(shape);
  }

  public displaySquareData(shapeForListClass: string): void {
    const listDataElement = document.querySelector(
      `.${shapeForListClass.toLowerCase()}-data-list`
    );
    const edgeItemElement = document.createElement("li");
    const areaItemElement = document.createElement("li");
    const perimeterItemElement = document.createElement("li");
    edgeItemElement.innerHTML = `Edge: ${this._edge} cm`;
    areaItemElement.innerHTML = `Area: ${this.getArea()} cm <small> 2 </small>`;
    perimeterItemElement.innerHTML = `Perimeter: ${this.getPerimeter()} cm`;
    listDataElement.append(
      edgeItemElement,
      areaItemElement,
      perimeterItemElement
    );
  }
}
