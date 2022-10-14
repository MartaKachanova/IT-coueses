function Figure(name, a, h) {
  this.name = name;
  this.displayData = displayData;

  const self = this; 
  function displayData() { 
    console.log("name:", self.name);  // self - возьмется из-за пределов функции, за пределами функции displayData, this - корректный
  }
}
function Triangle(name, a, h) {
  Figure.apply(this, arguments);

  let area = null; // сохраняем площадь
  this.findArea = findArea;
  this.findArea();
  this.getArea = getArea;
  this.getArea();


  const parentMethod = this.displayData
  
  this.displayData = function () {
     parentMethod();
     console.log('any additional data');
  };

  function findArea() {
    area = 0.5 * a * h;
  }
  function getArea() {
    return area;
  }
}
const triangleS = new Triangle("triangle", 5, 5);
const triangleM = new Triangle("triangle", 15, 5);
const triangleL = new Triangle("triangle", 25, 15);

console.log(triangleS.displayData());
