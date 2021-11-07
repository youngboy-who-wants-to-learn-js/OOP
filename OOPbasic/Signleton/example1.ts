// гарантирует создание одного экземпляря класса
class Database {
  // @ts-ignore
  url: number;
  private static instance: Database;

  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.url = Math.random();
    Database.instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1.url);
console.log(db2.url);
