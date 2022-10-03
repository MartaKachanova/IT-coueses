const arr = [
  "",
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];

function daysOfWick(day) {
  if (typeof day === "number" && day > 7) {
    throw new Error("parameter should be in the range of 1 to 7");
  }
  if (typeof day !== "number") {
    throw new Error("parameter type is not a Number");
  }
  for (let i = 1; i < arr.length; i++) {
    return arr[day];
  }
}

console.log(daysOfWick(1));
console.log(daysOfWick(2));
console.log(daysOfWick(8));
console.log(daysOfWick("1"));
