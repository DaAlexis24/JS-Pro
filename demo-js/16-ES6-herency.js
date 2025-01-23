class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
  }
}

class User extends Person {
  static usersNumber = 0;
  static countUsers = function () {
    User.usersNumber++;
  };
  constructor({ name, age = 22, role }) {
    super(name, age);
    this.role = role;
    User.countUsers();
  }

  //   Sobrecarga de métodos
  greet() {
    super.greet();
    console.log(`Mi nivel de usuario es ${this.role}`);
  }
}

const user1 = new User({ name: "Juan", role: "admin" });
const user2 = new User({ name: "Daniel", role: "user", age: 18 });

user1.greet();
user2.greet();
