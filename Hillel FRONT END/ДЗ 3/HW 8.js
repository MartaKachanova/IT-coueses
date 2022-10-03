let number = 2;
let result;

function toCube(number) {
  if (number === Number) {
    result = number * number;
  } else {
    throw new Error("parameter is not a number type");
  }
  return result;
}

console.log(toCube(2));
console.log(toCube("srting"));
