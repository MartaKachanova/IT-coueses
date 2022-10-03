var a = Number(prompt("Enter first number"));
var b = Number(prompt("Enter second number"));

console.log(a);
if(a >= b){
    alert("First number can’t be bigger than the second");
} else if(isNaN(a) && isNaN(b)){
    alert("Invalid input data");
}

var arr =[];
for (var i = a; i < b; i++){
    arr.push(i);
}

alert("Numbers between :  " + arr );
   





