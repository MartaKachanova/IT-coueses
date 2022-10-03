let newString;

function upperCaseFirst(string) {
  let firstLetter = string.charAt(0).toUpperCase();
  let shortString = string.slice(1);

  newString = firstLetter + shortString;

  return newString;
}
console.log(upperCaseFirst("pitter")); // Pitter

//АБО

// function upperCaseFirst(string){

// let firstLetter = string.charAt(0).toUpperCase();
// let shortString = string.slice(1);

// return firstLetter + shortString;
// }
// console.log(upperCaseFirst('pitter')); // Pitter
