class Rectangle {
  private _width;
  private _height;

  constructor(w: number, h: number) {
    this._width = w;
    this._height = h;
  }

  public get width() {
    return this._width;
  }

  public set width(value) {
    if (value <= 0) {
      this._width = 1;
    } else {
      this._width = value;
    }
  }
}

const rect = new Rectangle(3, 4);
rect.width = -2;
console.log(rect);
