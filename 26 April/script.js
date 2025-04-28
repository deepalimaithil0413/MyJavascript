 // Arrsy literals 

 
 const fruits = ["apple", "banana", "papaya"];
 
 const mixed = [23, "hello", true, { name: "john"}];
 
 // index
 
 console.log(numbers[3]);
 console.log(fruits[2]);
 console.log(mixed[2].name);
 
 
 // Array constructor 
 
 const names = new Array("ram","shyam","rahul");
 console.log(names);
 
 // empty
 const colors[];
 
 colors[0] = "red";
 colors[1] = "blue";
 colors[2] = "yellow";

 console.log(colors);

 console.log(`my fav color is ${colors[1]}`);

 const numbers = [1,2,3,4,4];

 // adds an element to the end of array

 numbers.push(6);

 // returns the lenght of an array

 console.log(numbers.length);


 // removes the last element of an array

 numbers.pop();

 // unshift adds an elemts to the start of an array.
 numbers.unshift(100);

 //shift removes an elemets from the start of an array.

 numbers.shift();

 // slice - extracts or returns the numbers of elements from an array.
 // (starting index to ending index not included )
 // also it does not change the original array.

 let x;
 x= numbers.slice(0,3);
 console.log(x);
 console.log(numbers);

 // splice - it is similar to slice but second parameter that is the number os
 // elemts to remove 
 // it change the original array.

 x = numbers.splice(1, 3);
 console.log(x)
 
 console.log(numbers);
