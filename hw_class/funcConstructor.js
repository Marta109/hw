//todo------ version with ES5 -----------------------
const generateRandomId = () => {
  return Math.random().toString(32).slice(2, 10);
};

function BankAccount(balance) {
  this.balance = balance;
  this.id = generateRandomId();
}

BankAccount.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.balance += amount;
  } else {
    return 'Invalid amount';
  }
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount > 0 && amount <= this.balance) {
    this.balance -= amount;
  } else {
    return 'Invalid amount';
  }
};

BankAccount.prototype.getBalance = function () {
  return `Your balance: ${this.balance}`;
};

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.id = generateRandomId();
}

User.prototype.addBankAccount = function (account) {
  this.bankAccount = new BankAccount(account);
  return this.bankAccount.id;
};
User.prototype.pay = function (accountID, amount) {
  if (this.bankAccount.id !== accountID) {
    return `Invalid account ID`;
  } else {
    this.bankAccount.withdraw(amount);
    return `New balance after payment: ${this.bankAccount.balance}`;
  }
};

User.prototype.receive = function (accountID, amount) {
  if (this.bankAccount.id != accountID) {
    return `Invalid account ID`;
  } else {
    this.bankAccount.deposit(amount);
    return `New balance after receive: ${this.bankAccount.balance}`;
  }
};

User.prototype.getBalance = function () {
  return this.bankAccount.getBalance();
};

Object.defineProperty(User.prototype, 'fullName', {
  get: function () {
    return `${this.firstName} ${this.lastName}`;
  },
});

Object.defineProperty(User.prototype, 'getId', {
  get: function () {
    return this.id;
  },
});

console.log('--Function Constructor-------------------');

const user = new User('John', 'Smith');
const accountId = user.addBankAccount(5000);

console.log(user.fullName);
console.log(user.getId);
console.log(accountId);
console.log(user.pay(accountId, 300));
console.log(user.receive(accountId, 100));
console.log(user.getBalance());
