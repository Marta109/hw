const generateRandomId = () => {
  return Math.random().toString(32).slice(2, 10);
};

class BankAccount {
  constructor(balance) {
    this.balance = balance;
    this.id = generateRandomId();
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      return 'Invalid amount';
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
      return 'Invalid amount';
    }
  }

  getBalance() {
    return `Your balance: ${this.balance}`;
  }
}

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = generateRandomId();
  }

  addBankAccount(account) {
    this.bankAccount = new BankAccount(account);
    return this.bankAccount.id;
  }
  pay(accountID, amount) {
    if (this.bankAccount.id !== accountID) {
      return `Invalid account ID`;
    } else {
      this.bankAccount.withdraw(amount);
      return `New balance after payment: ${this.bankAccount.balance}`;
    }
  }

  receive(accountID, amount) {
    if (this.bankAccount.id != accountID) {
      return `Invalid account ID`;
    } else {
      this.bankAccount.deposit(amount);
      return `New balance after receive: ${this.bankAccount.balance}`;
    }
  }

  getBalance() {
    return this.bankAccount.getBalance();
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get getId() {
    return this.id;
  }
}

console.log('--Class-------------------');
const user = new User('John', 'Smith');
const accountId = user.addBankAccount(5000);

console.log(user.fullName);
console.log(user.getId);
console.log(accountId);
console.log(user.pay(accountId, 300));
console.log(user.receive(accountId, 100));
console.log(user.getBalance());

