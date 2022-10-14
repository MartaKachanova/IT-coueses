// * Задача 1.
// *
// * Создать функцию конструктор Figure, которая принимает параметром name, a, h,
// * где a — сторона фигуры, h — высота фигуры.
// * класс Figure содержит метод displayData, который выводит в логе название фигуры
// *
// * Cоздайте функцию конструктор Triangle, которая наследует все свойства от конструктора Figure.
// * Triangle принимает на вход name, a, h
// * Triangle содержит метод подсчета площади треугольника
// * Triangle также содержит метод displayData, но помимо названия фигуры выводит информацию о площади
// *
// * Cоздайте функцию конструктор Rhombus, которая наследует все свойства от конструктора Figure.
// * Rhombus принимает на вход name, a, h
// * Rhombus содержит метод подсчета площади квадрата
// * Rhombus также содержит метод displayData, но помимо названия фигуры выводит информацию о площади квадрата
// *
// * создайте переменную figures, при помощи которой выведите на экран общую сумму площадей всех фигур
// */

function Figure(name, a, h) {
  this.name = name;
  this.displayData = displayData;

  const self = this;
  function displayData() {
    console.log("name:", self.name); // self - возьмется из-за пределов функции, за пределами функции displayData, this - корректный
  }
}
function Triangle(name, a, h) {
  Figure.apply(this, arguments);

  let area = null; // сохраняем площадь
  this.findArea = findArea;
  this.findArea();
  this.getArea = getArea;
  this.getArea();

  const parentMethod = this.displayData;

  this.displayData = function () {
    parentMethod();
    console.log(getArea());
  };

  function findArea() {
    area = 0.5 * a * h;
  }
  function getArea() {
    return area;
  }
}

function Rhombus(name, a, h) {
  Figure.apply(this, arguments);

  let area = null; // сохраняем площадь
  this.findArea = findArea;
  this.findArea();
  this.getArea = getArea;
  this.getArea();

  const parentMethod = this.displayData;

  this.displayData = function () {
    parentMethod();
    console.log(getArea());
  };

  function findArea() {
    area = a * h;
  }

  function getArea() {
    return area;
  }
}

const triangleS = new Triangle("triangle", 5, 5);
const triangleM = new Triangle("triangle", 15, 5);
const triangleL = new Triangle("triangle", 25, 15);

const rhombusS = new Rhombus("rhombus", 5, 5);
const rhombusM = new Rhombus("rhombus", 15, 5);
const rhombusL = new Rhombus("rhombus", 25, 15);

const figures =
  triangleS.getArea() +
  triangleM.getArea() +
  triangleL.getArea() +
  rhombusS.getArea() +
  rhombusM.getArea() +
  rhombusL.getArea();

triangleS.displayData();
triangleM.displayData();
triangleL.displayData();

rhombusS.displayData();
rhombusM.displayData();
rhombusL.displayData();

console.log("sum:", figures);
