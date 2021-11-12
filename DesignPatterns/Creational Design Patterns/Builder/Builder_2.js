/**
  It constructs complex objects from simple objects.
 */

class Person {
  constructor() {
    this.streetAddress = this.postcode = this.city = "";
    this.companyName = this.position = "";
    this.annualIncome = 0;
  }

  toString() {
    return `Person lives at 
      ${this.streetAddress}, ${this.postcode}, ${this.city}
      and works at ${this.companyName} as a
      ${this.position} earning ${this.annualIncome}`;
  }
}

// create Person Builder, Person Job Builder, and Person Address Builder

class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }

  asA(position) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostCode(postcode) {
    this.person.postcode = postcode;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }
}

let personBuilder = new PersonBuilder();
let person = personBuilder.lives
  .at("ABC ROAD")
  .in("New York")
  .withPostCode("5578")
  .works.at("Google")
  .asA("Engineer")
  .earning(100)
  .build();

console.log(person);
console.log(person.toString());
