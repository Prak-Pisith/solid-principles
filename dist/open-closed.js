class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    calculateArea() {
        return Math.PI * this._radius * this._radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    calculateArea() {
        return this._width * this._height;
    }
}
// TODO: You can add new shapes without modifying existing code.
