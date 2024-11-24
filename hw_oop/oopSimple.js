class Rectangle {
  #length;
  #width;
  constructor(length = 100, width = 50) {
    this.#length = length;
    this.#width = width;
  }

  get length() {
    return this.#length;
  }

  set length(newLength) {
    this.#length = newLength;
  }

  get width() {
    return this.#width;
  }

  set width(newWidth) {
    this.#width = newWidth;
  }

  getArea() {
    return this.#length * this.#width;
  }

  getPerimeter() {
    return 2 * (this.#length + this.#width);
  }

  toString() {
    return `Rectangle:
    length=${this.#length}, width=${this.#width} ,
    perimeter=${this.getPerimeter()}, area=${this.getArea()}`;
  }
}

class Employee {
  #id;
  #firstName;
  #lastName;
  #position;
  #salary;
  #workingHours;
  constructor(firstName, lastName, position, salary, workingHours) {
    this.#id = this.generateRandomId();
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#position = position;
    this.#salary = salary;
    this.#workingHours = workingHours;
  }

  get id() {
    return this.#id;
  }

  set id(newId) {
    this.#id = newId;
  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(newFirstName) {
    this.#firstName = newFirstName;
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(newLastName) {
    this.#lastName = newLastName;
  }

  get position() {
    return this.#position;
  }

  set position(newPosition) {
    this.#position = newPosition;
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    this.#salary = newSalary;
  }

  get workingHours() {
    return this.#workingHours;
  }

  set workingHours(newWorkingHours) {
    this.#workingHours = newWorkingHours;
  }

  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  getAnnualSalary() {
    return this.#salary * 12;
  }

  raiseSalary(percent) {
    const raiseAmount = (this.#salary * percent) / 100;
    this.#salary += raiseAmount;
  }

  generateRandomId() {
    return Math.random().toString(32).slice(2, 10);
  }
}

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }

  get gender() {
    return this._gender;
  }

  set gender(newGender) {
    this._gender = newGender;
  }

  toString() {
    return `Author:
    name=${this._name}, email=${this._email}, gender=${this._gender}`;
  }
}

class Books {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    this._author = newAuthor;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(newQuantity) {
    this._quantity = newQuantity;
  }

  getProfit() {
    return this._price * this._quantity;
  }

  toString() {
    return `Book:
    title=${this._title}, author=${this._author.toString()}, 
    price=${this._price}, quantity=${this._quantity}
    profit=${this.getProfit()}`;
  }
}

