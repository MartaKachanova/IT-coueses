function truncate(string, maxLen) {
  if (!(typeof string === "string")) {
    throw new TypeError("First parameter should be a string type.");
  }

  if (!(typeof maxLen === "number")) {
    throw new TypeError("Second parameter should be a number type.");
  }

  if (string.length > maxLen) {
    const sliced = string.slice(0, maxLen - 3);

    return `${sliced}...`;
  } else {
    return string;
  }
}

console.log(
  truncate(
    "Security and cryptography mistakes you are probably doing all the time",
    37
  )
); // 'Security and cryptography mistakes...'
