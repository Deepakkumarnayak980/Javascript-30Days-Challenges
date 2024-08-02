// task1  - Write a progrsm to check if a num is positive ,negative or Zero  and log the result to the console


// let num =10;
// if (num>0){
//     console.log( "it is a Positive")
// } 
// else if (num <0){
//     console.log("it is negative")
// }else{
//     console.log("it is Zero")
// }
// // Or
// function checkNumber(num) {
//     if (num > 0) {
//         console.log(num + " is positive");
//     } else if (num < 0) {
//         console.log(num + " is negative");
//     } else {
//         console.log(num + " is zero");
//     }
// }
// checkNumber(5);   


// Task2 -Write a program to check if a person is eligible to vote (age>=18) and log the result to the console

// let age =10;
//  if (age>=18){
//     console.log("Eligible to vote");
//  }else{
//     console.log("It is not Eligible to vote");
//  }

// //  or
// function ages(params) {
//     if  (params>=18){
//         console.log(params+ "-Eligible to vote");
//      }else{
//         console.log(params+ "-It is not Eligible to vote");
//      }
// }
// ages(4);

// TASK3- Write a program to find the largest of three number using nasted if-else statement
// function FindLargest(a,b,c) {
//     let largest;
//     if(a>=b){
//         if (a>=c){
//             largest=a;

//         }else{
//             largest=c;

//         }
//     }else{
//         if(b>=c){
//             if (b>=c){
//                 largest=b;
    
//             }else{
//                 largest=c;
                
//             }
//         }
//     }
//     console.log("The largest number is" +largest);
// }
// FindLargest(20,10,23)


// TASK4 - Write a program that uses a switch case to determind the day of the week based on a number (1-7) and log the day name to the console


function getDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
            break;
    }
    console.log(dayName);
}


getDayOfWeek(1); 


// Task5 - Write a program that uses a switch case to assign a grade ('a','b','c','d','f')based on a score  and log the grade to the console

// function assignGrade(score) {
//     let grade;
//     switch (true) {
//         case (score >= 90 && score <= 100):
//             grade = 'A';
//             break;
//         case (score >= 80 && score < 90):
//             grade = 'B';
//             break;
//         case (score >= 70 && score < 80):
//             grade = 'C';
//             break;
//         case (score >= 60 && score < 70):
//             grade = 'D';
//             break;
//         case (score >= 0 && score < 60):
//             grade = 'F';
//             break;
//         default:
//             grade = 'Invalid score';
//             break;
//     }
//     console.log("The grade is " + grade);
// }


// assignGrade(95);  


// Task-6 -Write a program that uses the ternary operater to check if a number is even or odd and log the result to the console
function checkEvenOrOdd(num) {
    let result = (num % 2 === 0) ? "even" : "odd";
    console.log(`${num} is ${result}`);
}

checkEvenOrOdd(4); 

// task7 -Write a program to check if a year is a leap year using Multiple conditions (divisible by 4 ,but not 100 unless also divisible by 400)and log the results to the console

function checkLeapYear(year) {
    let isLeapYear = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
    let result = isLeapYear ? `${year} is a leap year` : `${year} is not a leap year`;
    console.log(result);
}


checkLeapYear(2020);  
checkLeapYear(1900);  
