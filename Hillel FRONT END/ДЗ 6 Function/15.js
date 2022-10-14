function main(a = 2, b = 3, c) {
  if (typeof c === "function") {
    sum();
  } else result = sum(a, b);
  return result;
}
function sum(a, b) {
  return a + b;
}

console.log(main()); //5
console.log(main(5, 10)); //15
console.log(main(5, 10, sum)); //15
