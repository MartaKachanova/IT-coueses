// #1
function calculateSum(arr) {
 let sum = arr.reduce((c, d) => c + d, 0);
 return sum;
}
console.log(calculateSum([1,2,3,4,5])); //15

// #2
function isTriangle(a, b, c) {
if (a <= 0 || b <= 0 || c <= 0) {
 return false;
}
if (a+b > c && a+c > b && c+b > a) {
 return true;
} else {
 return false;
}
}
console.log(isTriangle(5,6,7)); //true
console.log(isTriangle(2,9,3)); //false

// #3
function isIsogram(word) {
let o, p;
word = word.toLowerCase();
for(o = 0; o < word.length; ++o) {
    for(p = o + 1; p < word.length; ++p) {
    if(word[o] === word[p]) {
    return false;
    }
    }
    }
    return true;
}
console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('abab')); //false

// #4
function isPalindrome(word) {
let arrValue = word.split('');
let reversValue = arrValue.reverse('');
let reversWord = reversValue.join('');
// eslint-disable-next-line
if(word == reversWord){
    return true;
} else {
    return false;
    }
}
console.log(isPalindrome('Dermatoglyphics')); //false
console.log(isPalindrome('abbabba')); //true

// #5
function showFormattedDate(dateObj) {
    let dt = new Date(dateObj);
    let day = dt.getDate();
    let month = dt.toLocaleString('en-EN', { month: 'long' })
    let year = dt.getFullYear();
    return day + ' of ' + month + ' ' + year;
}
console.log(showFormattedDate(new Date('05/12/22'))); //'12 of May, 2022'

// #6
const letterCount = (str, letter) => {
    let letter_Count = 0;
    for (let position = 0; position < str.length; position++) {
       // eslint-disable-next-line eqeqeq
       if (str.charAt(position) == letter) {
         letter_Count += 1;
         }
     }
     return letter_Count;
   }
console.log(letterCount('abbaba', 'b')); //3

// #7
function countRepetitions(arr) {
    let count = {};
    arr.forEach(function(i) {
 count[i] = (count[i]||0) + 1;
});
    return count;
}  
console.log(countRepetitions(['banana', 'apple', 'banana'])); // { banana: 2, apple: 1 }

// #8
function calculateNumber(arr) {
   let binaryString = arr.join('');
   return parseInt(binaryString, 2);
}
console.log(calculateNumber([0, 1, 0, 1])); //5
console.log(calculateNumber([1, 0, 0, 1])); //9