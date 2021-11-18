// Facade  обеспечивает упрощенный интерфейс для сложного кода.

class CPU {
  freeze() {
    console.log("Freezed...");
  }

  jump(position) {
    console.log("Goooo" + position);
  }

  execute() {
    console.log("Run...");
  }
}

class Memory {
  load(position, data) {
    console.log("Load from " + position + "data " + data);
  }
}

class HardDrive {
  read(lba, size) {
    console.log("lba:", lba, "size:", size);
  }
}

class ComputerFacade {
  constructor() {
    this.processor = new CPU();
    this.ram = new Memory();
    this.hd = new HardDrive();
  }

  start() {
    this.processor.freeze();
    this.ram.load("boot_address", this.hd.read("boot_sector", "sector_size"));
    this.processor.jump("boot_address");
    this.processor.execute();
  }
}

const computer = new ComputerFacade();
computer.start();
