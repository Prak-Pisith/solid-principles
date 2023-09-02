interface Shape {
  calculateArea(): number;
}


class Circle implements Shape {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this._radius * this._radius;
  }
}

class Rectangle implements Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  calculateArea(): number {
    return this._width * this._height;
  }
}

// TODO: You can add new shapes without modifying existing code.