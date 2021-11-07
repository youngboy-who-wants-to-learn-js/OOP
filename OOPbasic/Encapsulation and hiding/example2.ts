class User {
  private _username;
  private _password;
  private _id;

  constructor(name: string, password: string | number) {
    this._username = name;
    this._password = password;
    this._id = new Date().getTime();
  }

  get username() {
    return this._username;
  }

  set username(val) {
    this._username = val;
  }

  get password() {
    return this._password;
  }

  set password(val) {
    this._password = val;
  }

  get id() {
      return this._id
  }

  
}

const user = new User('Vlad', 'test1');
console.log(user)
