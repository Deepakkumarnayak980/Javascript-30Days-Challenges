// // TASK1-Write a program to add numbers amd log the results to the console.
let a = 10;
let b = 20;
console.log(`a+b=${a + b}`);

// // TASK2-Write a program to subtract numbers amd log the results to the console.
let C= 10;
let D = 20;
console.log(`C-D=${C - D}`);

// // TASK3-Write a program to Multiply numbers amd log the results to the console.
let a = 10;
let b = 20;
console.log(`a*b=${a * b}`);

// // TASK4-Write a program to divide numbers amd log the results to the console.
let a = 10;
let b = 20;
console.log(`a/b=${a / b}`);

// //task5-Write a program to find the remainder when one number is dividesd by another and log the result to the console

let num1 = 25;
let num2 = 7;
let remainder = num1 % num2;
console.log(`The remainder when ${num1} is divided by ${num2} is ${remainder}`);



// // task6-  Use the +=operator to add a number to a variables and log the result to the console
 let num =10;
 let addvalue=5;

 num += addvalue;
 console.log(`the new The new value of num is ${num} `);


// // task7-  Use the -=operator to Subtract a number to a variables and log the result to the console
 let num =10;
 let addvalue=5;

 num -= addvalue;
 console.log(`the new The new value of num is ${num} `);


//Task-8    Write a program to compare two numbers using < and > and log the result to console


let num1 = 15;
let num2 = 10;

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
  console.log(`${num1} is less than ${num2}`);
} else {
  console.log(`${num1} is equal to ${num2}`);
}


//Task-9   Write a program to compare two numbers using =< and >= and log the result to console


let num1 = 10;
let num2 = 10;

if (num1 >= num2) {
    console.log(`${num1} is greater than or equal to ${num2}`);
} else if (num1 <= num2) {
    console.log(`${num1} is less than or equal to ${num2}`);
} else {
    console.log(`${num1} is equal to ${num2}`);
}


// // Task-10 Write a program to compare two numbers using == and === and log the result to console

// Define two numbers
let num1 = 5;
let num2 = '5'; // This is a string, not a number

// Compare using == (loose equality)
let looseEquality = (num1 == num2);

// Compare using === (strict equality)
let strictEquality = (num1 === num2);

// Log the results to the console
console.log(`Loose equality (==): ${num1} == ${num2} is ${looseEquality}`);
console.log(`Strict equality (===): ${num1} === ${num2} is ${strictEquality}`);



// Task 11
// && operater

let a =3;
let b =-2;
console.log(a>0 && b<0);

//task12
// || operater

let a =-3;
let b =2;
console.log(a>0 || b<0);
