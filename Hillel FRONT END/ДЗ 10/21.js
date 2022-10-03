function memoize() {
  let result = '';

  return function (value){
    if(value){
        result += value;

    }
    return result;
  };

}

const memoizedValue = memoize();

memoizedValue("0");
memoizedValue("1");
memoizedValue("0");
console.log(memoizedValue()); // 010


const memoizedValue2 = memoize();
memoizedValue2("H");
memoizedValue2("E");
memoizedValue2("L");
memoizedValue2("L");
memoizedValue2("O");
console.log(memoizedValue2()); // HELLO