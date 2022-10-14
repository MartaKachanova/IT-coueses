let result;

function isEven(number) {
  if (number % 2 == 0) {
    result = true;
  } else if (number % 2 == 1) {
    result = false;
  } else {
    throw new Error("parameter type is not a Number");
  }
  return result;
}

console.log(typeof +isEven(3), ":", isEven(3));
console.log(typeof +isEven(4), ":", isEven(4));
console.log(typeof +isEven("string"), ":", isEven("string"));
