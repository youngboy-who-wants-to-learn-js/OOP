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
    return new VictorianCoffeeTable();
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
    return new ModernCoffeeTable();
  }
}

interface Chair {
  dust: boolean;
  clean(): void;
}

interface CoffeeTable {
  dust: boolean;
  clean(): void;
}

interface Sofa {
  dust: boolean;
  clean(): void;
}
