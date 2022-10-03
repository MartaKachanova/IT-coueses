class DB {
  myMap;
  constructor() {
    this.myMap = new Map();
  }

  create(user) {
    if (
      !(
        typeof user.name === "string" &&
        typeof user.age === "number" &&
        typeof user.city === "string" &&
        typeof user.salary === "number"
      )
    ) {
      throw new Error("Value received by" + `${this}` + "method is incorrect");
    }

    let id;

    do {
      id = Math.floor((1 + Math.random()) * 0x10000).toString(36);
    } while (this.myMap.has(id));

    this.myMap.set(id, user);
    return id;
  }

  read(id) {
    if (typeof id === "string") {
      return this.myMap.get(id) ? { id, ...this.myMap.get(id) } : null;
    } else {
      throw new Error("Value must be string.");
    }
  }
  readAll() {
    let userArray = [];
    this.myMap.forEach((value, key) => userArray.push({ id: key, ...value }));
    return userArray;
  }

  update(id, data) {
    if (arguments.length < 2) {
      throw new Error("Arguments is not enough");
    }
    if (this.read(id)) {
      this.myMap.set(id, { ...this.myMap.get(id), ...data });
      return id;
    } else {
      throw new Error("User not found");
    }
  }
  delete(id) {
    if (this.read(id)) {
      return this.myMap.delete(id);
    } else {
      throw new Error("user not found.");
    }
  }
}
const db = new DB();

const person = {
  name: "Avrora", // обязательное поле с типом string
  age: 21, // обязательное поле с типом number
  city: "Kyiv", // обязательное поле с типом string
  salary: 500, // обязательное поле с типом number
};

const id = db.create(person);
console.log("id", id);

const client = db.read(id);
console.log("client", client);

const clients = db.readAll(); // массив пользователей
console.log("clients", clients);

console.log(db.update(id, { age: 22 })); // id
console.log(db.delete(id)); // true
