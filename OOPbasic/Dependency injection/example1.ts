{
  class User {
    username: string;
    age: number;
    constructor(username: string, age: number) {
      this.username = username;
      this.age = age;
    }
  }

  interface UserRepo {
    getUsers: () => User[];
    // delete, create ...
  }

  class UserMongoDBRepo implements UserRepo {
    getUsers(): User[] {
      return [
        {
          username: "Пользователь из MONGO DB",
          age: 21,
        },
      ];
    }
  }

  class UserPostgresDBRepo implements UserRepo {
    getUsers(): User[] {
      return [
        {
          username: "Пользователь из Postgres DB",
          age: 21,
        },
      ];
    }
  }

  class UserService {
    userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
      this.userRepo = userRepo;
    }

    filterUserByAge(age: number) {
      const users = this.userRepo.getUsers();
      // logic
      return users;
    }
  }

  const userService =  new UserService(new UserPostgresDBRepo())
  console.log(userService.filterUserByAge(3));
}
