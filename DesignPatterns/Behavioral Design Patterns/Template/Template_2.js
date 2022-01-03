class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} do ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} have ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return `Program creation process`;
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return `testing`;
  }
}

const dev = new Developer("SDad", 1000000);
