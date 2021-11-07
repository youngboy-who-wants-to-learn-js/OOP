/**
Фабричный метод — это порождающий паттерн проектирования, который определяет общий интерфейс для создания объектов в суперклассе, позволяя подклассам изменять тип создаваемых объектов
 */

//  У нас есть класс точек, и мы должны создать декартову точку и полярную точку. Мы определим фабрику Point, которая будет выполнять эту работу
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static get factory() {
    return new PointFactory();
  }
}

// создание Point фабрики

class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

let point = PointFactory.newPolarPoint(5, Math.PI / 2);
let point2 = PointFactory.newCartesianPoint(5, 6);
console.log(point);
console.log(point2);
