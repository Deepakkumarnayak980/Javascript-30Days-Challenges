
// ============ Activity 1: Template Literals ============ //

// --> task - 1 <--
const personName = `Deepak`;
const personAge = 24;
console.log(`Name of the person is "${personName}" and he is ${personAge} years old.`);

// ---> Task-2 <----
const multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString);


//============= Activity 2:  Destructuring ================ //

//  ------> Task-3 <--------

const numArr = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second, ...remaining] = numArr;
console.log("First element of the array is: ", first);
console.log("Second element of the array is: ", second);


// -----------Task-4 --------------

const books = [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    }
  ];

  const [firstBook, secondBook] = books;
  const { title: firstTitle, author: firstAuthor } = firstBook;
  const { title: secondTitle, author: secondAuthor } = secondBook;
  
  console.log(`First Book - Title: ${firstTitle}, Author: ${firstAuthor}`);
  console.log(`Second Book - Title: ${secondTitle}, Author: ${secondAuthor}`);


//   ==================== Activity-3 ================== //

// -----> task-5 <----------

const existingArray =[1,2,3,4,5]

const newArray = [...existingArray,5,6,7,8]
console.log("New array which includes all elements from this", existingArray, "array and some extra elements", newArray);




// ----> task-6 <-----

function calculatePrice (... num1){
    return num1.reduce((total ,num ) =>(total+num,0))
}
console.log(calculatePrice(1,2,3,4,5));


// ===============Activity-4 ==============//

// -------->Task-7 <--------------


function num(a, b = 1) {
    return a * b;
}

console.log(num(4, 5));

//================= Activity-4 =============== //
// --> task - 8 <--
const name = "Anirudha";
const age = 22;
const status = "Unmarried";

const myDetails = { name, age, status };
console.log(myDetails);

// --> task - 9 <--
let x = 10;
let i = 0
const computedObjectProperties = {
    [`${x - x}`]: x * i,
    [`${x - x + (++i)}`]: x * i,
    [`${x - x + (++i)}`]: x * i,
}
console.log(computedObjectProperties);
