const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];

const isEqual = (firstArray, secondArray) => {
  for (let i = 0; i < firstArray.length; i++) {
    if (
      firstArray[i] !== secondArray[i] ||
      firstArray.length !== secondArray.length
    ) {
      return false;
    }
  }
  return true;
};

console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false
