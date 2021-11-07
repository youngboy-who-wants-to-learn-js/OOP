class User {
  username: string;
  age: number;
}

interface Repository<T> {
  create: (obj: T) => T;
  read: () => T;
  update: (obj: T) => T;
  delete: (obj: T) => T;
}

class UserRepo implements Repository<User> {
  create(user: User): User {
    return undefined;
  }
  read() {
    return undefined;
  }
  update(user: User): User {
    return undefined;
  }
  delete(user: User): User {
    return undefined;
  }
}

 