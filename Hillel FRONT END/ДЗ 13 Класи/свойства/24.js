// Реализуйте класс Employee, который будет иметь следующие свойства:
//  *
//  * - name — имя;
//  * - surname — фамилия;
//  * - days — количество рабочих дней.
//  * - rate — ставка за рабочий день;
//  *
//  *  Все свойства должны быть приватными.
//  *  Для чтения каждого из них создайте соответствующие методы:
//  * - getName — возвращает конкатенацию приватных свойств name и surname;
//  * - getDays — возвращает значение приватного свойства days
//  * - getRate — возвращает значение приватного свойства rate
//  * - getSalary — возвращает зарплату (произведение (умножение) ставки rate на количество отработанных дней days)
//  *
//  *  Для свойства rate и days добавьте методы для установки значений.
//  *
//  *  Cоздайте класс Actor, который наследуется от класса Employee
//  *
//  *  Actor должен обладать следующими свойствами:
//  * - understudies — дублеры;
//  * - getUnderstudies() - метод, который отображает дублеров.
//  */

// Решение
class Employee {
  #rate;
  #days = 0;
  #name;
  #surname;

  constructor(name, surname) {
    this.#name = name;
    this.#surname = surname;

    this.setRate(10); // setup for every object a default rate value
  }

  getName() {
    return this.#name + " " + this.#surname;
  }

  getDays() {
    return this.#days;
  }

  getRate() {
    return this.#rate;
  }

  getSalary() {
    return this.#rate * this.#days;
  }

  setRate(value) {
    this.#rate = value;
  }

  setDays(value) {
    this.#days = value;
  }
}

class Actor extends Employee {
  constructor(name, surname, understudies) {
    super(name, surname);

    this.understudies = understudies;
  }

  getUnderstudies() {
    const title = "Understudies is:\n";

    return title + this.understudies
    .map((element, i) => `${i + 1}, ${element}`)
    .join("\n");
  }
};

const understudies = ["Jimmy Chi", "Tay Co Chi"];

const person = new Actor("Angelina", "Jolie", understudies);

console.log("name: ", person.getName()); // Angelina Jolie
console.log("rate: ", person.getRate()); // 10  - displaying a default value
console.log("working days: ", person.getDays()); // 0 - displaying a default value
console.log("total amount: ", person.getSalary()); // 0

person.setRate(20);
person.setDays(10);

console.log("working days: ", person.getDays()); // working days: 10
console.log("new rate: ", person.getRate()); // new rate: 20

console.log("total amount: ", person.getSalary()); // 20 * 10 = 200

console.log(person.getUnderstudies()); // 1. Jimmy Chi, 2. Tay Co Chi
// console.log(person.#name); // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
