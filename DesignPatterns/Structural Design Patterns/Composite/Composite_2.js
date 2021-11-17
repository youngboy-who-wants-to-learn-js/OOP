class Employer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  print() {
    console.log(`name: ${this.name} relaxTime:`);
  }
}

class EmployerGroup {
  constructor(name, composite = []) {
    console.log("name:", name);
    this.name = name;
    this.composites = composite;
  }

  print() {
    this.composites.forEach((emp) => emp.print());
  }
}

let viko = new Employer("ravi", "developer");
let test = new Employer("test", "QA");
let groupDevelopers = new EmployerGroup("Developers", [viko, test]);
let groupDevelopers2 = new EmployerGroup("Developers", [
  groupDevelopers,
  viko,
  test,
]);

let groupDevelopers3 = new EmployerGroup("Developers", [
  groupDevelopers2,
  viko,
  test,
]);

groupDevelopers2.print();
