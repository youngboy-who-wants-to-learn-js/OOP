interface FurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable;
  createSofa(): Sofa;
}

class VictorianFurnitureFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new VictorianChair();
  }

  public createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }
  public createSofa(): Sofa {
    return new VictorianSofa();
  }
}

class ModernFurnitureFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new ModernChair();
  }

  public createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }
  public createSofa(): Sofa {
    return new ModernSofa();
  }
}

interface Chair {
  color: string;
  clean(): void;
}

class VictorianChair implements Chair {
  public color: "Victorian";

  public clean(): void {
    console.log("Clean VictorianChair");
  }
}

class ModernChair implements Chair {
  public color: "Modern";

  public clean(): void {
    console.log("Clean ModernChair");
  }
}

interface CoffeeTable {
  color: string;
  clean(): void;
}

class VictorianCoffeeTable implements CoffeeTable {
  public color: "Victorian";

  public clean(): void {
    console.log("Clean VictorianCoffeeTable");
  }
}

class ModernCoffeeTable implements CoffeeTable {
  public color: "Modern";

  public clean(): void {
    console.log("Clean ModernCoffeeTable");
  }
}

interface Sofa {
  color: string;
  clean(): void;
}

class VictorianSofa implements Sofa {
  public color: "Victorian";

  public clean(): void {
    console.log("Clean VictorianSofa");
  }
}

class ModernSofa implements Sofa {
  public color: "Modern";

  public clean(): void {
    console.log("Clean ModernSofa");
  }
}

function clientCode2(factory: FurnitureFactory) {
  const modernChair = factory.createChair();
  const modernSofa = factory.createSofa();

  console.log(modernChair.clean());
  console.log(modernSofa.clean());
}

clientCode2(new ModernFurnitureFactory());