const car = {
  wheels: 4,
  init() {
    console.log(`wheels: ${this.wheels} owner: ${this.owner}`);
  },
};

const carWithOwner = Object.create(car, { owner: { value: "Semen" } });
carWithOwner.init();
