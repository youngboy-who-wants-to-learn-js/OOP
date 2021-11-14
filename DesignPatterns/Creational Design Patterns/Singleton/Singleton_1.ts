/* 
Одиночка — это порождающий паттерн, который гарантирует существование только одного объекта определённого класса, а также позволяет достучаться до этого объекта из любого места программы.
*/

class Singleton1 {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton1.instance) {
      Singleton1.instance = new Singleton();
    }

    return Singleton1.instance;
  }

  public someBusinessLogic() {
    // ...
  }
}

function clientCode() {
  const s1 = Singleton1.getInstance();
  const s2 = Singleton1.getInstance();

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}

clientCode();
