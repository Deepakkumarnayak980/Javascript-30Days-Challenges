// task1 -- Write a program to print number from 1 to 10 using a for loop
let n =10;

for (let i = 1; i <=n ; i++) {
  console.log(i);
    
}


// task-2  Write a program to print the multiplication table of 5 using for loop


let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


// Task3 -- write a program to calculate the sum of numbers from 1 to 10 using a while loop

let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(`The sum of numbers from 1 to 10 is ${sum}`);


// Write a program to print number from 10 to 1 using a while loop

let i =10;
while(i >=1){
    console.log(i);
    i--
}


// task5- Write a program to print numbers from 1 to 5 using a do..while loop

let i=1;
do{
   console.log(i);
     i++;
}while(i <=5);

// Task 6- Write a program to calculate the factorial of a number using a do...while loop


// task7 -- Write a program to print a pattern using nested for loops

// let rows = 5; 

// for (let i = 1; i <= rows; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }

// Task8-- Write a program to print number from 1 to 10 but skip the number 5 using the continue

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i);
}
// Task8-- Write a program to print number from 1 to 10 but stop the loop when the number is 7 using the breack statement
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
       break; 
    }
    console.log(i);
}