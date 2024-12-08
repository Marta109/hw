const generateRandomId = () => {
  return Math.random().toString(32).slice(2, 10);
};

class BankAccount {
  constructor(balance = 0) {
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
    this.bankAccounts = new Map();
  }

  addBankAccount(account) {
    const accountId = account.id;
    this.bankAccounts.set(accountId, account);
    return accountId;
  }
  pay(accountId, amount) {
    if (!this.bankAccounts.has(accountId)) {
      return `Invalid account ID`;
    } else {
      const account = this.bankAccounts.get(accountId);
      account.withdraw(amount);
      return `New balance after payment: ${account.balance}`;
    }
  }

  receive(accountId, amount) {
    if (!this.bankAccounts.has(accountId)) {
      return `Invalid account ID`;
    } else {
      const account = this.bankAccounts.get(accountId);
      account.deposit(amount);
      return `New balance after receive: ${account.balance}`;
    }
  }

  getBalance(accountId) {
    if (!this.bankAccounts.has(accountId)) {
      return `Invalid account ID`;
    }

    const account = this.bankAccounts.get(accountId);
    return account.getBalance();
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
const account = new BankAccount(5000);
const accountId = user.addBankAccount(account);

console.log(user.fullName);
console.log(user.getId);
console.log(accountId);
console.log(user.pay(accountId, 300));
console.log(user.receive(accountId, 100));
console.log(user.getBalance(accountId));

console.log('------second bank account-----');
const account2 = new BankAccount(1000);
const accountId2 = user.addBankAccount(account2);

console.log(user.fullName);
console.log(user.getId);
console.log(accountId2);
console.log(user.pay(accountId2, 300));
console.log(user.receive(accountId2, 100));
console.log(user.getBalance(accountId2));
