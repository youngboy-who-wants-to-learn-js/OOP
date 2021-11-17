// Адаптер шаблон позволяет классам с несовместимыми интерфейсами работать вместе, обертывая их собственный интерфейс вокруг существующего класса.

class Calculator1 {
  constructor() {
    this.operations = function (value1, value2, operation) {
      switch (operation) {
        case "add":
          return value1 + value2;
        case "sub":
          return value1 - value2;
      }
    };
  }
}

class Calculator2 {
  constructor() {
    this.add = function (value1, value2) {
      return value1 + value2;
    };

    this.sub = function (value1, value2) {
      return value1 - value2;
    };
  }
}

class CalcAdapter {
  constructor() {
    const calc2 = new Calculator2();
    this.operations = function (value1, value2, operation) {
      switch (operation) {
        case "add":
          return calc2.add(value1, value2);
        case "sub":
          return calc2.sub(value1, value2);
      }
    };
  }
}

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 55, "sub"));
