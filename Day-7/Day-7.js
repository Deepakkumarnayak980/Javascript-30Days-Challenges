// Task1 //

const books = {
    name: "City Library",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      },
      {
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851
      }
    ]
  };
  
  console.log(books);
  


// Task -2 //

books.books.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
  });
  
// Task-3 //
// const library = {
//     name: "City Library",
//     books: [
//       {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         year: 1960,
//         getDetails() {
//           return `Title: ${this.title}, Author: ${this.author}`;
//         }
//       },
//       {
//         title: "1984",
//         author: "George Orwell",
//         year: 1949,
//         getDetails() {
//           return `Title: ${this.title}, Author: ${this.author}`;
//         }
//       },
//       {
//         title: "Moby Dick",
//         author: "Herman Melville",
//         year: 1851,
//         getDetails() {
//           return `Title: ${this.title}, Author: ${this.author}`;
//         }
//       }
//     ]
//   };
  
//   // Logging the result of calling the getDetails method
//   library.books.forEach(book => {
//     console.log(book.getDetails());
//   });
  

//Task-4//

books.updateYear = function (newYear) {
    this.year = newYear;
};
console.log("\nBefore updating book's publish year is: ", books.year);
books.updateYear(2000);
console.log("After updating book's publish year is: ", books.year, "\n");

