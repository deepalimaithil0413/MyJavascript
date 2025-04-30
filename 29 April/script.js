const fruits = ["mango","strawberry","graphs","kiwi"];

// starting index, elements to remove , elemetns to add

fruits.splice(0,2,"red","blue","green");

console.log(fruits);

// reverse of elements

// fruits.reverse();
console.log(fruits);

// include
console.log(fruits.includes(45));

// indexOf
console.log(fruits.indexOf("red"));

// array convert to string

let x= fruits.toString();
x=fruits.join();
console.log(x, typeof x);

// string to array

x=x.split(",");

console.log(x, typeof x);

console.log(fruits.slice(1,4).reverse(),toString().charAt(0));

let y=Array.isArray(fruits);
console.log(y);

const num1 = [1,2,3,4,5];
const num2 = [10,20,30,40,50];

// concatenation

const numbers = num1.concat(num2);
console.log(numbers);

// spread operator (...)

const numbers2 = [... num1, num2];
console.log(numbers2);

// task

// [6,5,4,3,2,1,0];

const arr = [1,2,3,4,5];
arr.reverse();
arr.unshift(6);
arr.push(0) // push method se last element ko add karta he
console.log(arr); //[6,5,4,3,2,1,0];

// task 2
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

const number3 = arr1.concat(arr2);
let number4 = number3.splice(5,1);
console.log(number3);  //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// OBJECT LITERALS

const perrson = {
    name : "john dow",
    age : 25,
    iseligible : true,
    address:{
        street:13,
        state:"bhopal",
        country:"India",
    },
    hobbies : ["dance","sports"];
};
console.log(person.name);
console.log(person.iseligible);
console.log(person.address.state);
console.log(person.hobbies[0]);






