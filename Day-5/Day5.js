// // task1 = write a function to check if a number is even or odd and log the results to the console

function check(num) {
    if(num%2===0){
       console.log(num + " is even");
    }
    else{
        console.log(num + " is odd");
    }
}
check(5);

// // task2 -- Write a function to calculate the square of a numbers and return the results

function square (num){
    result=num*num;
    console.log(` ${num} is square = ${result}`);
}
square(5)


// // Task3 - write a function expression to find the maximum of two numbers and log the results to the console

const findmax=function(a,b){
   const max =(a>b)?a:b;
   console.log(`the maximum of ${a} and ${b} is ${max}`);
}
findmax(10,23)

// // Task4 - Write a function expression to concatenate two string and return the result

const concatenatestrings = function (str1,str2){
    const result = str1 +str2;
    return result;
}
const combindString = concatenatestrings("Hello","Deepak");
console.log(combindString);


// // task5 -- write a arrow function to calculate the sum of two numbers and return the results

const add = (num1,num2) =>{
    return num1 +num2;
}
console.log(add(3,4));
     
     //OR

    const add1 = (num1,num2) =>(num1 +num2)  
    console.log(add1(3,3));

// //  task6  = write a arrow function  to check if a string contains specific character and return a boolean value. 
const containsChar = (str, char) => str.includes(char);

// Example usage:
const result = containsChar("hello world", "w");
console.log(result); 


const result2 = containsChar("hello world", "z");
console.log(result2); 


// // task 7-- Write a function that takes two parameter and return their product ,provide a default value for the second parameter

function multiply(a, b = 1) {
    return a * b;
}


console.log(multiply(5, 10)); 
console.log(multiply(7));     


// // Task 8--  Write a function that takes a person's name  and age return  a greeting  message ,provide a default value for the age

function greet(name, age = "unknown") {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Example usage:
console.log(greet("Deepak", 24));  
console.log(greet(  "",23));        


// // task9 -- Write a high-order function that tasks a function and a number and call the function that many times.

function repeatfunction (func,time ){
    for(let i=0 ; i<time;i++){
        func();
    }
}
const sayhello =()=>console.log("hello");

repeatfunction(sayhello,4)

// //Task=10 -- Write a high-order function that tasks a two function and a value ,applies the first function to the value and then applies the second function to the result

function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}


const double = x => x * 2;
const square = x => x * x;


const result = applyFunctions(double, square, 3);
console.log(result);  // Output: 36
