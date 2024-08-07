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
const library = {
    name: "City Library",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        getDetails() {
          return `Title: ${this.title}, Author: ${this.author}`;
        }
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        getDetails() {
          return `Title: ${this.title}, Author: ${this.author}`;
        }
      },
      {
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851,
        getDetails() {
          return `Title: ${this.title}, Author: ${this.author}`;
        }
      }
    ]
  };
  
  // Logging the result of calling the getDetails method
  library.books.forEach(book => {
    console.log(book.getDetails());
  });
  

//Task-4//

books.updateYear = function (newYear) {
    this.year = newYear;
};
console.log("\nBefore updating book's publish year is: ", books.year);
books.updateYear(2000);
console.log("After updating book's publish year is: ", books.year, "\n");




// task-5//

const library ={
  name: "city library",
  books:[
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",

    },
    {
      title: "1984",
      author: "George Orwell",
    }
  ,{
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  }
  ]
}

console.log(library);


// Task-6 //

const nameOfLibrary = library.name;
console.log("\nThe name of the library is:",nameOfLibrary);

// Yask -7 //
const book = {
  title: "The 48 Laws of Power",
  author: "Robert Greene",
  year: 1998,
};
book.details = function () {
  return `Book Title: ${this.title}\nBook Author: ${this.author}`;
};
console.log("\n" + book.details());


// Task-8 //
console.log("\nIterating over the properties of the book object using for...in");
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

// --> task - 9 <--
console.log("\nUsing Object.keys and Object.values methods to log all the keys and values of the book object.");
console.log("\nAll the keys of the book object are: ", Object.keys(book));
console.log("\nAll the values of the book object are: ", Object.values(book));

