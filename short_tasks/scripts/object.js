// Objects:
// 1. Create a User object that contains properties for name, age, and email. Include methods to greet (returns a greeting message) and updateEmail.

const user = {
  name: 'Jon',
  age: 30,
  email: 'jon@example.com',
  greet() {
    return `Hello 👋  ${this.name}!`;
  },
  updateEmail(newEmail) {
    this.email = newEmail;
    return `Email updated to ${this.email}`;
  },
};

// console.log(user.greet());
// console.log(user.updateEmail('newalice@example.com'));

// 2. Create an array of workers objects with properties for name and age. Write a function that takes an age as a parameter and returns an array of users older than that age.
const workers = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
  { name: 'Max', age: 47 },
];

function filterUsersByAge(minAge) {
  return workers.filter((el) => el.age > minAge);
}

// const olderUsers = filterUsersByAge(24);
// console.log(olderUsers);

// 3. Modify the book objects to include a pagesRead property. Write a function that calculates and returns the total number of pages read from all books.
const collection = [
  { title: 'The Great Gatsby', pages: 180, pagesRead: 100 },
  { title: '1984', pages: 328, pagesRead: 50 },
  { title: 'To Kill a Mockingbird', pages: 281, pagesRead: 281 },
];

function countTotalPagesRead() {
  return collection.reduce((acc, book) => acc + book.pagesRead, 0);
}

// const totalRead = countTotalPagesRead();
// console.log(totalRead);

// 4. Create an array of book objects, where each book has properties such as title, author, pages, and isRead.
//    Write a function to add a new book and a function to list all books with their read status.
const library = [];

function addNewBook(title, author, pages, isRead = false) {
  const newBook = {
    Title: title || '',
    Author: author || '',
    Pages: pages || 0,
    IsRead: isRead,
  };
  
  library.push(newBook);

  return newBook;
}
function listBooks() {
  return library.map((book) => ({
    Title: book.Title,
    Author: book.Author,
    Pages: book.Pages,
    Read: book.IsRead ? 'yes' : 'no',
  }));
}
// console.log(addNewBook('The Great Gatsby', 'F. Scott Fitzgerald', 180));
// console.log(addNewBook('1984', 'George Orwell', 328));
// console.log(listBooks());
// listBooks(); // Title: example, Author: example, Pages: example, Read: true/false || yes/no

// 5. Extra: Grouping Library Functions into One Object
const librarySystem = {
  books: [],

  listBooks() {
    console.log(
      this.books.map((book) => ({
        Title: book.title,
        Author: book.author,
        Pages: book.pages,
        Read: book.isRead ? 'yes' : 'no',
      })),
    );
  },

  addNewBook(book) {
    this.books.push(book);
    return book;
  },

  getBookById(bookId) {
    return this.books.find((book) => book.id === bookId);
  },

  updateBook(bookId, book) {
    const index = this.books.findIndex((book) => book.id === bookId);
    if (index > -1) {
      this.books[index] = book;
      return book;
    }
    return 'book not found';
  },

  deleteBook(bookId) {
    const index = this.books.findIndex((book) => book.id === bookId);
    if (index > -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  },

  getBooksByAvailableStatus(status) {
    return this.books.filter((book) => book.isAvailable === status);
  },
};

// Example usage:
// librarySystem.books // book[]
// librarySystem.listBooks(); :print in console: 'Title: string, Author: string, Pages: number, Read: true/false || yes/no'
// librarySystem.addNewBook(book); // :newBook
// librarySystem.getBookById(bookId); // :book | undefined
// librarySystem.updateBook(bookId, book); // :book
// librarySystem.deleteBook(bookId); // :true/false
// librarySystem.getBooksByAvailableStatus(status); // :book[] returns all available or unavailable books according to the filter

// Book Entity (shape of a book)
// book {
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
//   pages: number;
//   isRead: boolean;
//   isAvailable: boolean;
//   id: 5
// }

//! ------ Usage:------------------
// console.log(
//   librarySystem.addNewBook({
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     pages: 180,
//     read: 'no',
//     id: 1,
//     isAvailable: true,
//   }),
// );
// console.log(
//   librarySystem.addNewBook({
//     title: '1984',
//     author: 'George Orwell',
//     pages: 328,
//     read: 'no',
//     id: 2,
//     isAvailable: false,
//   }),
// );

// console.log(librarySystem.books);
// librarySystem.listBooks();
// console.log(librarySystem.getBookById(2));
// console.log(librarySystem.getBookById(100));
// console.log(
//   librarySystem.updateBook(2, {
//     title: '1984',
//     author: 'George Orwell',
//     pages: 8888888,
//     read: 'yes',
//     id: 2,
//     isAvailable: false,
//   }),
// );

// console.log(librarySystem.deleteBook(2));
// console.log(librarySystem.deleteBook(2000));
// console.log(librarySystem.getBooksByAvailableStatus(false));
