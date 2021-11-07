class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  create(name, type = "simple") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    return new Membership(name);
  }
}

const factory = new MemberFactory();

const member = factory.create("Vlad", "standard");
console.log(member)