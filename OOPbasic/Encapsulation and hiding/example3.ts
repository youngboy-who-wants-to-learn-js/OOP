class DataBase {
  private _url;
  private _port;
  private _username;
  private _password;
  private _tables: string[];

  constructor(url: string, port: number, username: string, password: string) {
    this._url = url;
    this._port = port;
    this._username = username;
    this._password = password;
    this._tables = [];
  }

  public createNewTable(table: string) {
    this._tables.push(table);
  }

  public clearTables() {
      
  }

  get url() {
    return this._url;
  }

  get port() {
    return this._port;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get tables() {
    return this._tables;
  }
}

const db = new DataBase("https://mydb.com", 7701, "User", "test1");
db.createNewTable("table1");
console.log(db);
