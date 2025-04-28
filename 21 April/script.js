 /*// type conversion

//string to number conversion

var a= "5.67";

// a = Number(a);
//parseInt and parseFloat
// a = parseInt(a);

a=parseFloat(a);
console.log(a, typeof a);

// number to string

var b = 45;

// there are two types of conversion to number to string method.

b= b.toString(); // first
b = String(b); // second

console.log(b, typeof b);

// to boolean

b= Boolean(b); // first
a=Boolean(a); // second

console.log(b, typeof b);
console.log(a, typeof a); */


//String

var name = "Deepali";
var age = 25;

// concatenation

var text = "My name is "+ name + " "+ "I am "+ age + "years old";

console.log(text);

// Template literals or Template string or backticks

var text2 = `My name is ${name} and i am ${age} years old`;

console.log(text2);

//types

var x="hello world  ";

// Type of 

console.log(typeof x);

//length = returns the number of characters

var output = x.length;

// charAt = returns the characters at specified  index number

output = x.charAt(0);

output = x[0];

// indexof = gives the first index of any characters

output = x.indexOf("h");

// trim = removes the whitespace from the string

output = x.trim();

// includes = returns true or false

output = x.includes("hell");

// replace = (one to be replaced , secnd new value)

output = x.replace("hello", "bye");

output = x.replaceAll("hello", "bye"); // when we can replace all words

//substring = (string index, ending index)

output = x.substring(0, 5);
output = x.substring(4) // if we can not declarared the second property so ye jo number hm dete h vo last tak ka word deta he

// slice

output = x.slice(0, 5)

// uppercase

output = x.toLocaleUpperCase();

//lowercase

output = x.toLocaleLowerCase();


console.log(output);

// task 






