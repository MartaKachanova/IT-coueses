const data = [0, 1, false, 2, undefined, "", 3, null];

const compact = (array) => {
    return array.filter((value) => Boolean(value) );

}

console.log(compact(data)) // [1, 2, 3]
