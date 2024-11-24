class Book {
  constructor(title, author, publicationDate) {
    this._title = title;
    this._author = author;
    this._publicationDate = publicationDate;
  }

  sayHello() {
    console.log(`Hello, I'm a book titled ${this._title} by ${this._author}.`);
  }
  toString() {
    return `Book:
    Title: ${this._title},
    Author: ${this._author}, 
    Publication Date: ${this._publicationDate}`;
  }
}

class Ebook extends Book {
  constructor(title, author, publicationDate, price) {
    super(title, author, publicationDate);
    this._price = price;
  }

  display() {
    console.log(this.toString(), `Price: $${this._price}`);
  }
}

// const ebook = new Ebook(
//   'The Gadfly',
//   'E. L. (Ethel Lillian)',
//   '1864-1960',
//   19.99,
// );

// const book = new Book(
//   'The Gadfly',
//   'E. L. (Ethel Lillian)',
//   '1864-1960',
//   19.99,
// );

// console.log(book.toString());
// console.log(book + '');
// console.log(book);
// console.dir(book);

// !  Person, Student , Teacher---------------------------------------------------------------------

class Person {
  constructor(firstName, lastName, age, gender) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._gender = gender;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge >= 0 && newAge <= 110) {
      this._age = newAge;
    } else {
      console.log('Invalid age');
    }
  }

  get gender() {
    return this._gender;
  }

  set gender(newGender) {
    if (newGender === 'Male' || newGender === 'Female') {
      this._gender = newGender;
    } else {
      console.log('Invalid gender');
    }
  }

  toString() {
    return `Person:
    First Name: ${this._firstName},
    Last Name: ${this._lastName},
    Age: ${this._age},
    Gender: ${this._gender}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, program, year, fee) {
    super(firstName, lastName, age, gender);
    this._program = program || [];
    this._year = year;
    this._fee = fee;
  }

  get program() {
    return this._program;
  }

  set program(newProgram) {
    this._program = newProgram;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    if (newYear >= 1 && newYear <= 4) {
      this._year = newYear;
    } else {
      console.log('Invalid year');
    }
  }

  get fee() {
    return this._fee;
  }

  set fee(newFee) {
    if (newFee >= 0) {
      this._fee = newFee;
    } else {
      console.log('Invalid fee');
    }
  }

  passExam(program, grade = 50) {
    let exam = this._program.find((exam) => exam.subject === program);

    if (!exam) {
      return console.log(`Program ${program} not found in program.`);
    }

    if (this._program.every((exam) => exam.grade >= grade)) {
      this._year++;
      console.log(`Congratulations, ${this._firstName}! You passed all exams.`);
    } else {
      console.log(`${this._firstName}, all exams are not passed.`);
    }
  }

  toString() {
    return (
      super.toString() +
      `
      Year: ${this._year},
      Fee: $${this._fee},
      Programs: 
      ${JSON.stringify(this._program)}`
    );
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age, gender, program, pay) {
    super(firstName, lastName, age, gender);
    this._program = program;
    this._pay = pay;
  }

  get program() {
    return this._program;
  }

  set program(newProgram) {
    this._program = newProgram;
  }

  get pay() {
    return this._pay;
  }

  set pay(newPay) {
    if (newPay >= 0) {
      this._pay = newPay;
    } else {
      console.log('Invalid pay');
    }
  }

  toString() {
    return (
      super.toString() +
      `
    Program: ${JSON.stringify(this._program)},
    Pay: $${this._pay}`
    );
  }
}

// let program = [
//   { subject: 'Math', grade: 60 },
//   { subject: 'History', grade: 75 },
//   { subject: 'Science', grade: 49 },
//   { subject: 'Physics', grade: 50 },
// ];

// const student = new Student('John', 'Doe', 18, 'Male', program, 2024, 1999);

// console.log(student.toString());

// student.passExam('Math', 90);

// student.passExam('Science', 15);

// const teacher = new Teacher(
//   'Jane',
//   'Smith',
//   45,
//   'Female',
//   ['Math', 'Science'],
//   4000.0,
// );
