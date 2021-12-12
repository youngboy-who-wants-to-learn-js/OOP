class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue;
  }

  square() {
    return this.num ** 2;
  }

  cube() {
    return this.num * 3;
  }
}

class Command2 {
  constructor(target) {
    this.target = target;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this.target[command]();
  }
}

const x = new Command2(new MyMath(2));
x.execute("cube");
