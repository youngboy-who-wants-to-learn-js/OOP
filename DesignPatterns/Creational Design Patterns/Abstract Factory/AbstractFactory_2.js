class Drink {
  consume() {}
}

class Tea extends Drink {
  consume() {
    console.log('This is tea')
  }
}

class Coffee extends Drink {
  consume() {
    console.log('This is coffee')
  }
}

class DrinkFactory {
  prepare(amount)
}

class TeaFactory extends DrinkFactory {
  makeTea() {
    console.log("Tea created")
    return new Tea()
  }
}

class CoffeeFactory extends DrinkFactory {
   makeCoffee() {
    console.log("Coffee created")
    return new Coffee()
  }
}

let teaDrinkFactory = new TeaFactory()
let tea = teaDrinkFactory.makeTea()
tea.consume()