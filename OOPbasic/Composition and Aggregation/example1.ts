class Engine {
  public drive() {
    console.log("Engine is working");
  }
}

class Wheel {
  public drive() {
    console.log("Wheel is going");
  }
}

class Freshener {}

class Car {
  engine: Engine;
  wheels: Wheel[];
  freshener: Freshener;

  constructor() {
    // Composition
    this.engine = new Engine();
    this.wheels = [];
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    // Aggregation
    this.freshener = new Freshener();
  }
  //  freshener живет своей жизнью независимо от объекта Car, если удалить объект Car двигатель и колеса удалятся вслед за ним, а freshener останется
  
  drive() {
    this.engine.drive();
    this.wheels.forEach((wheel) => wheel.drive());
  }
}

const bmw = new Car();
bmw.drive();
