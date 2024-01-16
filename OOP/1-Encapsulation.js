// Encapsulation is the bundling of data and the methods that operate on that data within a single unit (object or class).
// It helps hide the internal details of an object and expose only what is necessary.

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return (baseSalary = overtime * rate);
}

const employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};
employee.getWage();

class BankAccount {
  balance = 0;

  deposit(amount) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

let myAccount = new BankAccount();
myAccount.deposit(100);
console.log(myAccount.getBalance()); // 100

