import { Customer } from "./Customer.js";

export class Checking {
  static numberOfAccounts = 0;
  accountReference;
  _customer;
  _balance = 0;



  set customer(newValue) {
    if (newValue instanceof Customer) {
      this._customer = newValue;
    }
  }

  get customer() {
    return this._customer;
  }

  get balance() {
    return this._balance;
  }

  constructor(accountReference, customer) {
    this.accountReference = accountReference;
    this._customer = customer;
    Checking.numberOfAccounts += 1;
  }



  withdrawal(value) {
    if (this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }

  deposit(value) {
    if (value <= 0) {
      return;
    }
    this._balance += value;
  }

  transfer(value, accountReference) {
    const amountWithdrawn = this.withdrawal(value);
    accountReference.deposit(amountWithdrawn);
  }
}