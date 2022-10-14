// вызов 2
const newArray = [1, 2, 3, 4];

function filter(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const filtered = filter(newArray, function (item, i, array) {
  return item % 2 === 0;
});

console.log(filtered); // [2, 4]

