var a = Math.PI; // it returns the value of PI
console.log(a);

console.log(Math.sqrt(100)); // it returns the result of square root of number.

// ceil, floor, tofixed, abs, max, min,

let output;

output = Math.abs(-78); // when we give the positive value so this method takes the positive value into to negative value.

output = Math.ceil(5.17); // takes the upper value and round off.

output = Math.floor(9.88); // takes the lower value and rounds off.

output = Math.round(9.55); // takes the value of rounds off.

output = Math.trunc(9.55); // it returns the intergar value only.

output = Math.sign(-5);  // returns -1 if negative and 0 if num is positive, 0 if number is positive.

output = Math.pow(2,4); // (x,y) returns x to power of y.

output = Math.min(32, 45, 66, 77, 34344343, 222); // min returns the smallest number among all.

output = Math.max(32, 45, 66, 77, 34344343, 222); // max returns the largest number among all.

output = Math.random(); // returns the random number between 0 and 1

output = Math.floor(Math.random()*20); // returns random integar between 0 and num.

console.log(output);  

// task


var x=Math.floor(Math.random()*100+1);
var y=Math.floor(Math.random()*50+1);

let sum, diff, product,quo,rm;

sum=x+y;
console.log(sum);

diff=x-y;
console.log(diff);

product=x*y;
console.log(product);

quo=x/y;
console.log(quo);

rm=x%y;
console.log(rm);



