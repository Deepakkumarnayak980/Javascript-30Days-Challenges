
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
console.log(newArray);



// ----> task-6 <-----

function calculatePrice (... num1){
    return num1.reduce((total ,num ) =>(total+num,0))
}
console.log(calculatePrice(1,2,3,4,5));
