const newArray = ["Доброе утро!", "Добрый вечер!", 3, 512, "#", "До свидания!"];
const array = [1, 2, 3, 4];

function filter(array, callback) {
  const result = [];
  if (arguments.length !== 2) {
    throw new Error("Array lenghts is incorrect");
  }

  if (typeof arguments[1] !== "function") {
    throw new Error("Arguments can't be a function");
  }

  if (!Array.isArray(arguments[0])) {
    throw new Error("Arguments need to be array");
  }

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const filteredArray = filter(newArray, function (item, i, arrayRef) {
  return item === "Добрый вечер!";
});

console.log(filteredArray); // ['Добрый вечер!']
// вызов 2

const filtered = filter(array, function (item, i, array) {
  return item % 2 === 0;
});


console.log(filtered); // [2, 4]
