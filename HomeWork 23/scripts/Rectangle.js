import { Shape } from "./Shape.js";
export class Rectangle extends Shape {
    constructor(color, _width, _length) {
        super(color);
        this._width = _width;
        this._length = _length;
    }
    getArea() {
        return this._width * this._length;
    }
    getPerimeter() {
        return 2 * (this._width + this._length);
    }
    display(textElement, shape) {
        super.display(textElement, shape);
        this.displayRectangleData(shape);
    }
    displayRectangleData(shapeForListClass) {
        const listDataElement = document.querySelector(`.${shapeForListClass.toLowerCase()}-data-list`);
        const widthItemElement = document.createElement("li");
        const lengthItemElement = document.createElement("li");
        const areaItemElement = document.createElement("li");
        const perimeterItemElement = document.createElement("li");
        widthItemElement.innerHTML = `Width: ${this._width} cm`;
        lengthItemElement.innerHTML = `Length: ${this._length} cm`;
        areaItemElement.innerHTML = `Area: ${this.getArea()} cm <small> 2 </small>`;
        perimeterItemElement.innerHTML = `Perimeter: ${this.getPerimeter()} cm`;
        listDataElement.append(widthItemElement, lengthItemElement, areaItemElement, perimeterItemElement);
    }
}
