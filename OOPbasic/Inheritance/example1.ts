{
  class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName: string, lastName: string, age: number) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
    }

    public get fullName() {
      return this._firstName + " " + this._lastName;
    }

    get firstName() {
      return this._firstName;
    }

    set firstName(val) {
      this._firstName = val;
    }

    get lastName() {
      return this._lastName;
    }

    set lastName(val) {
      this._lastName = val;
    }

    get age() {
      return this._age;
    }

    set age(val) {
      if (val < 0) {
        this._age = 0;
      } else {
        this._age = val;
      }
    }
  }

  class Employee extends Person {
    private iin;
    private number;
    private snils;

    constructor(
      firstName: string,
      lastName: string,
      age: number,
      iin: number,
      number: number,
      snils: number
    ) {
      super(firstName, lastName, age);
      this.iin = iin;
      this.number = number;
      this.snils = snils;
    }
  }

  class Developer extends Employee {
    private level;

    constructor(
      firstName: string,
      lastName: string,
      age: number,
      iin: number,
      number: number,
      snils: number,
      level: string
    ) {
      super(firstName, lastName, age, iin, number, snils);
      this.level = level;
    }
  }

  const vlad = new Developer(
    "Vlad",
    "Zahrebelnyi",
    21,
    22,
    4324,
    52432,
    "JUNIOR"
  );
  console.log(vlad.fullName);
  console.log("Developer:", vlad);
}
