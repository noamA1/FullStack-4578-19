import { Shape } from "./Shape.js";
export class Square extends Shape {
    constructor(color, _edge) {
        super(color);
        this._edge = _edge;
    }
    getArea() {
        return Math.pow(this._edge, 2);
    }
    getPerimeter() {
        return 4 * this._edge;
    }
    display(textElement, shape) {
        super.display(textElement, shape);
        this.displaySquareData(shape);
    }
    displaySquareData(shapeForListClass) {
        const listDataElement = document.querySelector(`.${shapeForListClass.toLowerCase()}-data-list`);
        const edgeItemElement = document.createElement("li");
        const areaItemElement = document.createElement("li");
        const perimeterItemElement = document.createElement("li");
        edgeItemElement.innerHTML = `Edge: ${this._edge} cm`;
        areaItemElement.innerHTML = `Area: ${this.getArea()} cm <small> 2 </small>`;
        perimeterItemElement.innerHTML = `Perimeter: ${this.getPerimeter()} cm`;
        listDataElement.append(edgeItemElement, areaItemElement, perimeterItemElement);
    }
}
