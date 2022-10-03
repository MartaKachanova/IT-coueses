
// #1
function extractCurrencyValue(param){
let parsed = parseInt(param);
let str = String(parsed);
let num = 16;
if(str.length >= num){
    num = BigInt(str)
}else{
    num = parsed;
}
return num;
}
console.log(extractCurrencyValue('120 USD')); // 120
console.log(extractCurrencyValue('1283948234720742 EUR')); // 1283948234720742n
// #2
let object = {
    name: 'Ann',
    age: 16,
    hobbies: undefined,
    degree: null,
    isChild: false,
    isTeen: true,
    isAdult: false
}
function clearObject(obj){
    Object.keys(obj).forEach(key => {
        if(!obj[key]){
            delete obj[key];
        }    
    });
    return obj;
}
console.log(clearObject(object)); // { name: 'Ann', age: 16, isTeen: true }
// #3
function getUnique(param){
    param = Symbol("'" + param + "'");
    return param;
} 
console.log(getUnique('Test')) // Symbol('Test')
// #4
function countBetweenTwoDays(startDate, endDate){
    let DateFirst= new Date(startDate);
    let DateSecond = new Date(endDate);
    let difDays = Math.floor(DateFirst - DateSecond);
    let day = 1000 * 60 * 60 * 24;
    let days = Math.floor(difDays/day);
    let week = Math.round(days/7);
    let month = Math.round(days/31)
    return "The difference between dates is:" + days + "day(-s)" + week + "week(-s')" + month + "month(-s)" ;
}
console.log(countBetweenTwoDays('03/22/22', '05/25/22')); // The difference between dates is: 64 day(-s), 9 week(-s), 2 month(-s)

// #5
function filterArrayFirst(arr) {
let FirstExemple = [...new Set(arr)];
return FirstExemple
}
console.log(filterArrayFirst([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function filterArraySecond(arr){
let lucky = arr.filter((item,index) => index === arr.indexOf(item));
return lucky;
}
console.log(filterArraySecond([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]