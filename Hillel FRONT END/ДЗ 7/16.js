function calculate(...fns) {
  const arr = [];

  fns.forEach((fn, i) => {
    if (typeof fn !== "function") {
      throw new Error("Arguments need to be function");
    }
    if (typeof fn === "function") {
      const result = i === 0 ? fn() : fn(arr[i - 1]);
      arr.push(result);
    } else if (result === "undefined") {
      throw new Error("value undefined");
    }
  });

  return arr[arr.length - 1];
}

const result = calculate(
  () => {
    return 7;
  },
  (prevResult) => {
    return prevResult + 4;
  },
  (prevResult) => {
    return prevResult * 5;
  }
);

console.log(result); // 55
