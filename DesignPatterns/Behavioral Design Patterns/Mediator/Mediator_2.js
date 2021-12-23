class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(msg, to) {
    this.room.send(msg, this, to);
  }

  receive(msg, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      });
    }
  }
}

const user1 = new User("User1");
const user2 = new User("User2");
const user3 = new User("User3");

const room = new ChatRoom();
room.register(user1);
room.register(user2);
room.register(user3);
user1.send("test", user2);
user2.send("Hi!");
