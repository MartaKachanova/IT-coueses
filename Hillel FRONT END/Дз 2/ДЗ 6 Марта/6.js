const arr = [6, 5, 4, 3, 2, 1];
const length = arr.length;

for (let n = 0; n < length; n++) {
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}

console.log(arr);

