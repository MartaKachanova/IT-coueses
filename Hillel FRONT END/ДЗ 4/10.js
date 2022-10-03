let data = ["Volvo", "Jeep", "Volvo", "Lincoln", "Lincoln", "Ford"];

function unique(arr) {
  let result = [];

  if (arr.length === 0) {
    throw new Error("array can't be an empty");
  }

  if (!Array.isArray(arr)) {
    throw new Error("parameter type is not an Array");
  }

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }  
  }

  return result;
}

console.log( unique(data) );
console.log( unique([]) );
console.log( unique('context') );

