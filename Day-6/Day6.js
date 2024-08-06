// // Task1 -create an array of number from 1 to 5 and log the array to the console

// const arr =[1,2,3,4,5,6];
// console.log(arr);

// // //Task2 -- Access the first and last elements of array and log them to the console

// const num=[1,2,3,4,5];
//  const firstElement =num[0];
//  const lastElement=num[num.length-1];
//  console.log('First Element:', firstElement);
// console.log('Last Element:', lastElement);

// //Task3-- use the push method to add anew number to the end of the array and log the updated array,

// let slNum=[1,2,3,4,5]
// console.log(slNum);
// slNum.push(0);
// console.log(slNum);

// //Task4-- use the pop method to remove the last elements from the   array and log the updated array,

// let slNum=[1,2,3,4,5]
// console.log(slNum);
// slNum.pop();
// console.log(slNum);

// // //Task5-- use the shift method to remove the first elements from the   array and log the updated array,

// let slNum=[1,2,3,4,5]
// console.log(slNum);
// slNum.shift();
// console.log(slNum);

// //Task6-- use the unshift method to add anew number to the end of the array  and log the updated array,

// let slNum=[1,2,3,4,5]
// console.log(slNum);
// slNum.unshift(0);
// console.log(slNum);

// // task7-- use the map method to create a new array where each number is doubled and log the new array

// const mynum = [1,2,3,4]
//  const num =mynum.map((num)=>(num*2))
//  console.log(num);

//  const mynums = [1,2,3,4]
//  const num1=mynums.map((num1)=>{
//     return num1*2
//  })
//  console.log(num1);


// // Task8--- use the filter method to create a new array with only even numbers and log the new array

// const  mynum= [1,2,3,4,5,6];
// const newnum =mynum.filter((mynum)=>(mynum%2===0));
// console.log(newnum);

// //Task9-- Use the reduce method to calculate the sum of all the numbers in the array and log the result

// const arr = [1,2,3,4]
// const initialValue = 0;
// const sumOftotal=arr.reduce(
//     (acc,curValue) =>(acc + curValue)
// );
// console.log(sumOftotal);

// //OR

// const arr = [1,2,3,4]
// const initialValue = 0;
// const sumOftotal=arr.reduce(
//     (acc,curValue) =>{
//         return acc + curValue}
// );
// console.log(sumOftotal);


// // Task10-- use a for loop to iterate over the array and log each elements to the console

// const num = [1,2,3,4,5];
// for (let i = 0; i < num.length; i++) {
//    console.log( num[i]); 

// // task11-- Use the foreach method to calculate the sun of all numbers in the array and log each elements to the console

// const number=[1,2,3,4,5];
// let sum = 0;
// number.forEach(number => {
//     sum += number; 
//     console.log(number);
// });
// console.log("Sum:", sum);

// // Task12 -- create a two -dimensional array (matrix) and log the entire array to the console


// const matrix =[
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(matrix);


// //Task13-- Access and log a specific elements from the two-dimensional array 
//     // Create a two-dimensional array (matrix)
// const matrix1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const element1 = matrix[0][1]; 
// const element2 = matrix[2][0]; 

// console.log("Element at [0][1]:", element1);
// console.log("Element at [2][0]:", element2);


