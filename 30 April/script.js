const person = {
    name : "john",
    age : 25,
    iseligible : true,
    address : {
        state : MessagePort,
    },
    hobby : ["dance","sports"],
    hello: function(){
        console.log("hello");
    },
};

console.log(person.age);
console.log(person["age"]);
console.log(person.address.state);

// update values

person.iseligible = false;
person.name = "peter";

// new property add
person.address.city = "bhopal";
person.diplay = function(){
 console.log("hello friends");

};
person.hello();
console.log(person);

//    ** IT IS VERY VERY IMPORTANT *****// 
// SPREAD OPERATOR DEFINITION -  spread operator copy a part of an array or object into another array or object respectively.

const obj1 = {
    a : 1,
    b : 2,
};

const obj2 = {
    c : 3,
    d : 4,
};

const obj3 = {...obj1, ...obj2};

console.log(obj3);

// Array of objects

const list = [
    { name : "harry", age : 20},
    { name : "ron", age : 45},
    { name : "hagrid", age : 56},
    { name : "dumbledore", age : 400},
];

console.log(list[1].name);
console.log(list[3].name + "" + list [3].age);
console.log(`${list[3].namw} ${list[3].age}`);

//  Distructing in array and objeccts =  unpacking the values of an array or objects into variables.

const arr = [1,2,3,4,5,6,7,8];

// let a = arr [0];
// let b = arr[1];

// desttructiong with spread operator

const [a,b,c,d, ...x] = arr;
console.log(`${a} ${b} ${c} ${d}`);
console.log(`${x}`);

// in objects

const car = {
    color : "black",
    model : "BMW",
    year : 2022,
};

// let y = car.color;
// let z = car.model;
// same name as property

const { color, model, year } = car;

console.log(color + model + year);

// const { color:y, model:z, year: q} = car
// console.log(y + z + q);