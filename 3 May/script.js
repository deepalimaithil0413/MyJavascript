 // 4 ways function

 // no return & no parameters

 function display(){
    console.log("Hello");
 }
 display();

 // no return with parameters

 function add(num1, num2){ // parameter are the names of the varialble that are used to pass data 
    console.log(num1+num2);
 }

 add(10,20);  // arguments are the value pass the functions 
 add(34,54);

 // return with parameter

 function multiply(num1, num2){
    return num1 * num2;
 }

 let result = multiply(20,30);

//  alert(result);
 console.log(result);

 // return last widht no parameter
 function show(){
    return "Hello";
 }

 let ans = show();
 console.log(ans);

 // Function expression

 let cube = function (x){
   return x*x*x;
 };
 console.log(cube(10));

 // Arrow function - es6

 const print = (name) =>{
   console.log(name);
 };
 print("harry poter");

 // task
 
 function cube(num){

   console.log(num*num*num);
 }
 cube(4);

 // 
 // task
 
 function cube1(num){

   return num*num*num;
 }
 let ans1 = cube1(4);
 console.log(ans1);